export async function load(){
    
    return{
        categorys: [
            'Todos',
            'Rochoso',
            'Estrela',
            'Gasoso',
        ],
        items:[
            {slug:'terra', title: 'Terra', category: 'Rochoso', image: 'transferir.jpeg'},
            {slug:'sol',title: 'Item 1', category: 'Estrela', image: 'transferir.jpeg'},
            {slug:'jupiter',title: 'Item 1', category: 'Gasoso', image: 'transferir.jpeg'}
    
        ]
    }
}