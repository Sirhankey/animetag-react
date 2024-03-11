export function getTypeColor(type) {
    switch (type.toLowerCase()) {
        case 'grass':
            return '#4CAF50'; // verde
        case 'fire':
            return '#FF5733'; // laranja
        case 'water':
            return '#2196F3'; // azul
        case 'bug':
            return '#8BC34A'; // verde claro
        case 'normal':
            return '#9E9E9E'; // cinza
        case 'poison':
            return '#9C27B0'; // roxo
        case 'electric':
            return '#FFEB3B'; // amarelo claro
        case 'ground':
            return '#795548'; // marrom
        case 'fairy':
            return '#E91E63'; // rosa
        case 'fighting':
            return '#FF9800'; // laranja claro
        case 'psychic':
            return '#FF4081'; // rosa claro
        case 'rock':
            return '#FF5722'; // laranja escuro
        case 'ghost':
            return '#673AB7'; // roxo escuro
        case 'ice':
            return '#00BCD4'; // azul claro
        case 'dragon':
            return '#3F51B5'; // azul escuro
        case 'dark':
            return '#607D8B'; // cinza azulado
        case 'steel':
            return '#607D8B'; // cinza azulado
        case 'flying':
            return '#03A9F4'; // azul claro
        default:
            return 'gray'; // Cor padrão
    }
}

