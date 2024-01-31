import Image from "next/image";
import { SubmitHandler } from "react-hook-form";
import { Form } from "../form";
import { Button } from "../button";
import { ControlledInput } from "../controlled-input";
import { ControlledSelect } from "../controlled-select";
import * as S from "./styles";

export const ScheduleAppointmentForm: React.FC = () => {
	const options = [{ label: "string", value: "value" }];

	const onSubmit: SubmitHandler<any> = (data) => {
		console.log(data);
	};
	return (
		<Form onSubmit={onSubmit}>
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
						/>
						<ControlledInput
							name="surname"
							label="Sobrenome"
							placeholder="Digite seu sobrenome"
						/>
					</S.InputRowContainer>
					<S.InputRowContainer>
						<ControlledSelect
							options={options}
							name="region"
							label="Região"
							placeholder="Selecione sua região"
						/>
						<ControlledSelect
							options={options}
							name="city"
							label="City"
							placeholder="Selecione sua cidade"
						/>
					</S.InputRowContainer>
					<S.TeamDataContainer>
						<S.TeamDataTitle>
							<span className="title">Cadastre seu time</span>
							<span className="subtitle">
								Atendemos até 06 pokémons por vez
							</span>
						</S.TeamDataTitle>
						<S.RowSelectContainer>
							<label className="label">{`Pokémon 0${1}`}</label>
							<div className="select">
								<ControlledSelect
									options={options}
									name={`pokemon`}
									placeholder="Selecione seu pokémon"
								/>
							</div>
							<button
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
						</S.RowSelectContainer>
						<Button variant="outline">
							<span>Adicionar novo pokémon ao time...</span>
							<span>+</span>
						</Button>
					</S.TeamDataContainer>
					<S.InputRowContainer>
						<ControlledSelect
							options={options}
							name="serviceDate"
							label="Data para atendimento"
							placeholder="Selecione uma data"
						/>
						<ControlledSelect
							options={options}
							name="serviceHours"
							label="Horário de atendimento"
							placeholder="Selecione um horário"
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
							*adicionamos uma taxa de 3%, multiplicado pelo número da geração
							mais alta do time, com limite de até 30%
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
	);
};

