import "dotenv/config";
import * as yup from "yup";
import { EnvConfig } from "./env-config.interface";

const envSchema = yup.object({
	NEXT_PUBLIC_LOCAL_API_URL: yup.string().default("http://localhost:3000/api"),
	NEXT_PUBLIC_POKE_API_URL: yup.string().default("https://pokeapi.co/api/v2"),
});

let env: EnvConfig;

try {
	const _env = envSchema.validateSync(process.env, { abortEarly: false });
	env = _env;
	console.log("env aqui", env);
} catch (error) {
	console.error("Invalid enviroment variables.");
	throw new Error("Invalid enviroment variables.");
}

export { env };

