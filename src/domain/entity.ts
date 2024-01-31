export abstract class Entity<Props = any> {
	public readonly props: Props;

	constructor(props: Props) {
		this.props = props;
	}

	toJSON(): Required<Props> {
		return this.props as Required<Props>;
	}
}

