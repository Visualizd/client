export enum EndpointType {
    I,
    O
}

export interface IEndpoint {
    type: EndpointType,
    isConstant: boolean,
    name: string,
    value: any
}