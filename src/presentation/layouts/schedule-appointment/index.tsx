import Image from "next/image";
import { use, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "@/presentation/components/form";
import { Option } from "@/presentation/components/select";
import { Button } from "@/presentation/components/button";
import { PageHeader } from "@/presentation/components/page-header";
import { ControlledInput } from "@/presentation/components/controlled-input";
import { ControlledSelect } from "@/presentation/components/controlled-select";
import { useLocationOptions } from "@/presentation/hooks/use-location-options";
import { useTimeOptions } from "@/presentation/hooks/use-time-options";
import {
	CreateScheduleFormData,
	createScheduleSchema,
} from "@/presentation/schemas/create-schedule-schema";
import * as S from "./styles";

interface ScheduleAppointmentLayoutProps {
	dates: Option[];
	pokemons: Option[];
	regions: Option[];
}

export const ScheduleAppointmentLayout: React.FC<
	ScheduleAppointmentLayoutProps
> = ({ dates, pokemons, regions }) => {
	const [pokemonCount, setPokemonCount] = useState<number>(1);
	const formMethods = useForm<CreateScheduleFormData>({
		resolver: yupResolver(createScheduleSchema),
	});

	const { watch, reset, setValue, setError, formState } = formMethods;

	useEffect(() => {
		console.log(formState.errors);
	}, [formState.errors]);

	const regionValue = watch("region");
	const dateValue = watch("date");
	const firstPokemonValue = watch(`pokemons.${0}`);

	const {
		data: locationOptions = [],
		isFetching: loadingLocationOptions,
		refetch: refetchLocation,
	} = useLocationOptions(regionValue);

	const {
		data: timeOptions = [],
		isFetching: loadingTimeOptions,
		refetch: refetchTime,
	} = useTimeOptions(regionValue);

	const handleSelectRegion = () => {
		setValue("location", "");
		refetchLocation();
	};

	const addPokemonInput = () => {
		if (pokemonCount < 6) {
			setPokemonCount((prevCount) => prevCount + 1);
		}
	};

	const removePokemonInput = () => {
		if (pokemonCount > 1) {
			setPokemonCount((prevCount) => prevCount - 1);
			setValue(`pokemons.${pokemonCount - 1}`, "");
		}
	};

	const onSubmit: SubmitHandler<CreateScheduleFormData> = (data) => {
		if (!firstPokemonValue)
			return setError(`pokemons.${0}`, {
				type: "required",
				message: "Selecione no mínimo um pokemon",
			});
		setPokemonCount(1);
		reset();
	};

	return (
		<>
			<S.Container>
				<PageHeader subtitle="Recupere seus pokémons em 5 segundos" />
				<S.ContentWrapper>
					<Form
						onSubmit={onSubmit}
						customFormMethods={formMethods}
					>
						<S.FormContainer>
							<S.Title>
								Preencha o formulário abaixo para agendar sua consulta
							</S.Title>
							<S.CustomerDataContainer>
								<S.InputRowContainer>
									<ControlledInput
										name="name"
										label="Nome"
										placeholder="Digite seu nome"
										defaultValue=""
									/>
									<ControlledInput
										name="surname"
										label="Sobrenome"
										placeholder="Digite seu sobrenome"
										defaultValue=""
									/>
								</S.InputRowContainer>
								<S.InputRowContainer>
									<ControlledSelect
										options={regions}
										name="region"
										label="Região"
										placeholder="Selecione sua região"
										onSelect={handleSelectRegion}
									/>
									<ControlledSelect
										options={locationOptions}
										name="location"
										label="Cidade"
										placeholder="Selecione sua cidade"
										loading={loadingLocationOptions}
										disabled={!regionValue}
									/>
								</S.InputRowContainer>
								<S.TeamDataContainer>
									<S.TeamDataTitle>
										<span className="title">Cadastre seu time</span>
										<span className="subtitle">
											Atendemos até 06 pokémons por vez
										</span>
									</S.TeamDataTitle>
									{[...Array(pokemonCount)].map((_, index) => (
										<S.RowSelectContainer key={index}>
											<label className="label">{`Pokémon 0${index + 1}`}</label>
											<div className="select">
												<ControlledSelect
													options={pokemons}
													name={`pokemons.${index}`}
													placeholder="Selecione seu pokémon"
												/>
											</div>
											{index + 1 === pokemonCount && index !== 0 ? (
												<button
													onClick={() => removePokemonInput()}
													type="button"
													className="remove-button"
												>
													<Image
														src="/remove-item.svg"
														alt="Remove item"
														width={22}
														height={22}
													/>
												</button>
											) : (
												<div className="button-space" />
											)}
										</S.RowSelectContainer>
									))}

									<Button
										variant="outline"
										onClick={addPokemonInput}
									>
										<span>Adicionar novo pokémon ao time...</span>
										<span>+</span>
									</Button>
								</S.TeamDataContainer>
								<S.InputRowContainer>
									<ControlledSelect
										options={dates}
										name="date"
										label="Data para atendimento"
										placeholder="Selecione uma data"
										onSelect={() => refetchTime()}
									/>
									<ControlledSelect
										options={timeOptions}
										name="time"
										label="Horário de atendimento"
										placeholder="Selecione um horário"
										loading={loadingTimeOptions}
										disabled={!dateValue}
									/>
								</S.InputRowContainer>
								<S.Separator />
								<S.CheckoutInfo>
									<div className="row">
										<p>Número de pokémons a serem atendidos:</p>
										<p>{"numbers"}</p>
									</div>
									<div className="row">
										<p>Atendimento unitário por pokémon:</p>
										<p>{"numbers"}</p>
									</div>
									<div className="row">
										<p>Subtotal:</p>
										<p>{"numbers"}</p>
									</div>
									<div className="row">
										<p>Taxa geracional*:</p>
										<p>{"numbers"}</p>
									</div>
									<p className="tax-info">
										*adicionamos uma taxa de 3%, multiplicado pelo número da
										geração mais alta do time, com limite de até 30%
									</p>
								</S.CheckoutInfo>
								<S.CheckoutTotal>
									<span className="total-value">
										{`Valor Total: ${"valor total"}`}
									</span>
									<Button type="submit">Concluir Agendamento</Button>
								</S.CheckoutTotal>
							</S.CustomerDataContainer>
						</S.FormContainer>
					</Form>
				</S.ContentWrapper>
			</S.Container>
		</>
	);
};

