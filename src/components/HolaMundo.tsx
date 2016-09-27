import * as React from 'react';


export interface HolaMundoProps {  
    nombre: string;
    herramienta: string;
};


export class HolaMundo extends React.Component<HolaMundoProps, any> {  
    render() {
        const { nombre, herramienta } = this.props;

        return <h1> Hola {nombre}! Tu {herramienta} funciona :D </h1>;
    }
}