function Plural(props: {value: number, text: string, plural: string}) {
    return `${props.value} ${props.text}${props.value > 1 ? props.plural : ''}`;
}

export default Plural;