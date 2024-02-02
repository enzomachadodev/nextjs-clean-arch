import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
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
import { useSuccessModal } from "@/presentation/hooks/use-success-modal";
import {
	CreateScheduleFormData,
	createScheduleSchema,
} from "@/presentation/schemas/create-schedule-schema";
import * as S from "./styles";
import { SchedulingEntity } from "@/domain/entities/scheduling.entity";
import { PokemonEntity } from "@/domain/entities/pokemon.entity";
import { currencyFormatter } from "@/presentation/formatters/currency-formatter";
import { addPokemon } from "@/presentation/actions/add-pokemon-in-scheduling";
import { removeLastPokemon } from "@/presentation/actions/remove-last-pokemon-from-scheduling";
import { getPokemon } from "@/presentation/actions/get-pokemon";
import { useErrorModal } from "@/presentation/hooks/use-error-modal";
import { clearScheduling } from "@/presentation/actions/clear-scheduling";

interface ScheduleAppointmentLayoutProps {
	dates: Option[];
	pokemons: Option[];
	regions: Option[];
}

export const ScheduleAppointmentLayout: React.FC<
	ScheduleAppointmentLayoutProps
> = ({ dates, pokemons, regions }) => {
	const [pokemonCount, setPokemonCount] = useState<number>(1);
	const [scheduling, setScheduling] = useState<SchedulingEntity>(
		new SchedulingEntity({ pokemons: [] })
	);

	const addPokemonInScheduling = useCallback(async (pokemon: PokemonEntity) => {
		const scheduling = await addPokemon(pokemon);
		setScheduling(scheduling);
	}, []);

	const removePokemonFromScheduling = useCallback(async () => {
		const scheduling = await removeLastPokemon();
		setScheduling(scheduling);
	}, []);

	const clearSchedulingPokemons = useCallback(async () => {
		const scheduling = await clearScheduling();
		setScheduling(scheduling);
	}, []);

	useEffect(() => {
		clearSchedulingPokemons();
	}, [clearSchedulingPokemons]);

	const successModal = useSuccessModal();
	const errorModal = useErrorModal();
	const formMethods = useForm<CreateScheduleFormData>({
		resolver: yupResolver(createScheduleSchema),
	});

	const { watch, reset, setValue, setError } = formMethods;

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

	const handleSelectDate = () => {
		setValue("time", "");
		refetchTime();
	};

	const handleSelectPokemon = async (pokemonName: string, index: number) => {
		try {
			const selectValue = watch(`pokemons.${index}`);
			if (selectValue) {
				if (selectValue == pokemonName) return;
				removePokemonFromScheduling();
				const pokemon = await getPokemon(pokemonName);
				if (pokemon) {
					return addPokemonInScheduling(pokemon);
				}
			}
			const pokemon = await getPokemon(pokemonName);
			if (pokemon) {
				return addPokemonInScheduling(pokemon);
			}
		} catch (error) {
			errorModal.onOpen();
		}
	};

	const addPokemonInput = () => {
		if (pokemonCount < 6) {
			setPokemonCount((prevCount) => prevCount + 1);
		}
	};

	const removePokemonInput = () => {
		if (pokemonCount > 1) {
			removePokemonFromScheduling();
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
		successModal.onOpen(`Seu agendamento para dia ${data.date}, às ${data.time},
			para ${data.pokemons.length} pokémons foi realizado com sucesso!`);
		setPokemonCount(1);
		clearSchedulingPokemons();
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
													onSelect={(name) => handleSelectPokemon(name, index)}
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
										onSelect={handleSelectDate}
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
										<p>{scheduling.pokemons.length}</p>
									</div>
									<div className="row">
										<p>Atendimento unitário por pokémon:</p>
										<p>{currencyFormatter(7000)}</p>
									</div>
									<div className="row">
										<p>Subtotal:</p>
										<p>{currencyFormatter(scheduling.subtotal)}</p>
									</div>
									<div className="row">
										<p>Taxa geracional*:</p>
										<p>{currencyFormatter(scheduling.tax)}</p>
									</div>
									<p className="tax-info">
										*adicionamos uma taxa de 3%, multiplicado pelo número da
										geração mais alta do time, com limite de até 30%
									</p>
								</S.CheckoutInfo>
								<S.CheckoutTotal>
									<span className="total-value">
										{`Valor Total: ${currencyFormatter(scheduling.total)}`}
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

