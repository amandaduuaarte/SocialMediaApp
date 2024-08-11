import React from 'react';

// Cria um componente React genérico que será usado como mock para qualquer SVG
const SvgMock = (props) => <svg {...props}>{props.children}</svg>;

// Exporta o mock como padrão
export default SvgMock;