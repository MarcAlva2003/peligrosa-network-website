/*
NUEVA NOTICIA
            {
                //NOTICIA #
                titulo: '',
                descNoti: '',
                imgNoti: 'img/novedades/.jpg',
                fecha: ''
            },
*/

const app = new Vue({
    el: '#app',
    data: {
        noticias: [ //NOTA: AL COLOCAR NUEVA IMAGEN HACERLO ARRIBA DE TODO

            {
                //NOTICIA #2
                titulo: 'noticia 2  ',
                descNoti: 'esta es tremenda notidia porque impacta a todo el mundo y resulta que un mosquito acaba de picarme la pierna. Ya lo se a nadie le interesa pero me llena de rebia que a nadie le interese es por eso que esto lo pongo en la seccion de novedades asi que el que lo borra es gay jijajajjajajajaj',
                imgNoti: 'img/novedades/noticia-2.jpg',
                fecha: '10/01/2022'
            },
            {
                //NOTICIA #1
                titulo: 'Ya se encuenytra disponible la fase BETA sel modo SURVIVAL',
                descNoti: 'La fase beta del modo survival de Peligrosa Network ya se encuentra disponible para la version 1.16.5. La intención de esta modalidad es que los usuarios que ingresen puedan disfrutar del juego pero reportando cualquier tipo de bug o falla para que pueda ser solucionada antes de que la modalidad sea lanzada de forma publica y oficial.',
                imgNoti : 'img/novedades/noticia-1.png',
                fecha: '24/12/2021'
            }
        ],
        rangos: [
            {
                nombre: 'Ultra',
                ventajas: [
                    'Acceso a /afk ',
                    'Acceso a /volar',
                    'Acceso a /encerchest',
                    'Acceso a recompensas Ultra',
                    'Acceso a la Zona VIP',
                    'Acceso a Mascotas Bebés',
                    'Acceso a 3 mascotas',
                    'Acceso a ponerle nombre de color a las mascotas',
                    'Acceso al conjunto de viviendas multiples',
                    'Acceso a "kit Ultra Ultra" en el chat',
                    'Acceso a "Ultra" en la pestaña'
                ],
                precio: 'U$D 11.35',
                duracion: 'Permanente',
                imagen: 'img/tienda/ultra.jpg',
                ventana: false,
                enlace: 'https://peligroso.tebex.io/'
            },
            {
                nombre: 'Titan',
                ventajas: [
                    'Acceso a /afk ',
                    'Acceso a /volar',
                    'Acceso a /curar',
                    'Acceso a /feed',
                    'Acceso a /encerchest',
                    'Acceso a apodo de color',
                    'Acceso a recompensas Titan',
                    'Acceso a la Zona VIP',
                    'Acceso a Mascotas Bebés',
                    'Acceso a 4 mascotas',
                    'Acceso a ponerle nombre de color a las mascotas',
                    'Acceso al conjunto de viviendas multiples',
                    'Acceso a kit Titan en el chat',
                    'Acceso a "Titan" en el chat',
                    'Acceso a "Titan" en la pestaña'
                ],
                precio: 'U$D ',
                duracion: 'Permanente',
                imagen: 'img/tienda/titan.jpg',
                ventana: false,
                enlace: 'https://peligroso.tebex.io/'
            },
            {
                nombre: 'God',
                ventajas: [
                    'Acceso a /afk ',
                    'Acceso a /fly',
                    'Acceso a /curar',
                    'Acceso a /feed',
                    'Acceso a /hora configurada <hora>',
                    'Acceso a /reparacion',
                    'Acceso a /workbench',
                    'Acceso a /encerchest',
                    'Acceso a apodo de color',
                    'Acceso a recompensas God',
                    'Acceso a la Zona VIP',
                    'Acceso a Mascotas Bebés',
                    'Acceso a 4 mascotas',
                    'Acceso a ponerle nombre de color a las mascotas',
                    'Acceso para configurar varias viviendas',
                    'Acceso a kit Titan en el chat',
                    'Acceso a "kit Titan God" en el chat',
                    'Acceso a "God" en la pestaña'
                ],
                precio: 'U$D ',
                duracion: 'Permanente',
                imagen: 'img/tienda/god.jpg',
                ventana: false,
                enlace: 'https://peligroso.tebex.io/'
            },
            {
                nombre: 'Ultra',
                ventajas: [
                    'Acceso a /afk ',
                    'Acceso a /volar',
                    'Acceso a /encerchest',
                    'Acceso a recompensas Ultra',
                    'Acceso a la Zona VIP',
                    'Acceso a Mascotas Bebés',
                    'Acceso a 3 mascotas',
                    'Acceso a ponerle nombre de color a las mascotas',
                    'Acceso al conjunto de viviendas multiples',
                    'Acceso a "kit Ultra Ultra" en el chat',
                    'Acceso a "Ultra" en la pestaña'
                ],
                precio: 'U$D ',
                duracion: 'Temporal',
                imagen: 'img/tienda/ultra.jpg',
                ventana: false,
                enlace: 'https://peligroso.tebex.io/'
            },
            {
                nombre: 'Titan',
                ventajas: [
                    'Acceso a /afk ',
                    'Acceso a /volar',
                    'Acceso a /curar',
                    'Acceso a /feed',
                    'Acceso a /encerchest',
                    'Acceso a apodo de color',
                    'Acceso a recompensas Titan',
                    'Acceso a la Zona VIP',
                    'Acceso a Mascotas Bebés',
                    'Acceso a 4 mascotas',
                    'Acceso a ponerle nombre de color a las mascotas',
                    'Acceso al conjunto de viviendas multiples',
                    'Acceso a kit Titan en el chat',
                    'Acceso a "Titan" en el chat',
                    'Acceso a "Titan" en la pestaña'
                ],
                precio: 'U$D ',
                duracion: 'Temporal',
                imagen: 'img/tienda/titan.jpg',
                ventana: false,
                enlace: 'https://peligroso.tebex.io/'
            },
            {
                nombre: 'God',
                ventajas: [
                    'Acceso a /afk ',
                    'Acceso a /fly',
                    'Acceso a /curar',
                    'Acceso a /feed',
                    'Acceso a /hora configurada <hora>',
                    'Acceso a /reparacion',
                    'Acceso a /workbench',
                    'Acceso a /encerchest',
                    'Acceso a apodo de color',
                    'Acceso a recompensas God',
                    'Acceso a la Zona VIP',
                    'Acceso a Mascotas Bebés',
                    'Acceso a 4 mascotas',
                    'Acceso a ponerle nombre de color a las mascotas',
                    'Acceso para configurar varias viviendas',
                    'Acceso a kit Titan en el chat',
                    'Acceso a "kit Titan God" en el chat',
                    'Acceso a "God" en la pestaña'
                ],
                precio: 'U$D',
                duracion: 'Temporal',
                imagen: 'img/tienda/god.jpg',
                ventana: false,
                enlace: 'https://peligroso.tebex.io/'
            }
        ],
        crates: [
            {
                nombre: 'Llave crate RARO',
                imagen: 'img/tienda/crater-legen.jpg',
                precio: 'U$D',
                enlace: 'https://peligroso.tebex.io/'
            },
            {
                nombre: 'Llave crate LEGENDARIO',
                imagen: 'img/tienda/crater-epico.jpg',
                precio: 'U$D',
                enlace: 'https://peligroso.tebex.io/'
            }
        ]
    }
})