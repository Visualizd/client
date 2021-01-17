import {EndpointType} from './IEndpoint';

export const NodeEndpoints = {
    textInput: {
        input: [
            {
                name:"Input 1",
                type:EndpointType.I,
                value:"",
                isConstant:true
            },
            {
                name:"Input 2",
                type:EndpointType.I,
                value:"",
                isConstant:true
            }
        ],
        output: [
            {
                name:"Output 1",
                type:EndpointType.O,
                value:"",
                isConstant:false
            }
        ]
    },
    fileInput: {
        input: [
        ],
        output: [
            {
                name:"Output 1",
                type:EndpointType.O,
                value:"",
                isConstant:false
            }
        ]
    },
    dropdown: {
        input: [
            {
                name:"Input 1",
                type:EndpointType.I,
                value:"",
                isConstant:true
            },
            {
                name:"Input 2",
                type:EndpointType.I,
                value:"",
                isConstant:true
            },
            {
                name:"Input 3",
                type:EndpointType.I,
                value:"",
                isConstant:false
            }
        ],
        output: [
            {
                name:"Output 1",
                type:EndpointType.O,
                value:"",
                isConstant:false
            }
        ]
    },
    constantInput: {
        input: [
            {
                name:"Input 1",
                type:EndpointType.I,
                value:"",
                isConstant:true
            },
            {
                name:"Input 2",
                type:EndpointType.I,
                value:"",
                isConstant:true
            }
        ],
        output: [
            {
                name:"Output 1",
                type:EndpointType.O,
                value:"",
                isConstant:false
            },
            {
                name:"Output 2",
                type:EndpointType.O,
                value:"",
                isConstant:false
            }
        ]
    }
}