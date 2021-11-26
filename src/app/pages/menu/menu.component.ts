import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[] = [];

    constructor() { }

    ngOnInit(): void {

        this.items = [

            {
                label: 'Nike',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo-1971-.....jpg',
                    modelo: '',
                    marca: 'Nike'
                },

                items: [
                    {
                        "label": "Air Max 97",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-97-masculino-921826-015-1.png",
                            "marca": "Nike",
                            "modelo": "Air Max 97",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo-1971-.....jpg"
                        }
                    },
                    {
                        "label": "Air Max 95",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-95-essential-masculino-CI3705-001-1.jpg",
                            "marca": "Nike",
                            "modelo": "Air Max 95",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo-1971-.....jpg"
                        }
                    },
                    {
                        "label": "Air Max 90",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-90-masculino-CN8490-002-1.jpg",
                            "marca": "Nike",
                            "modelo": "Air Max 90",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo-1971-.....jpg"
                        }
                    },
                    {
                        "label": "Shox r4",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-shox-r4-masculino-104265-045-5.png",
                            "marca": "Nike",
                            "modelo": "Shox r4",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo-1971-.....jpg"
                        }
                    },
                    {
                        "label": "Air Force",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://authenticfeet.vteximg.com.br/arquivos/ids/238386-1000-1000/Tenis-Nike-Air-Force-1-07-Masculino-Branco.jpg?v=637376001083430000",
                            "marca": "Nike",
                            "modelo": "Air Force",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo-1971-.....jpg"
                        }
                    },
                    {
                        "label": "Air Max 200",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.lojanike.com.br/860x860/produto/tenis-nike-air-max-200-masculino-AQ2568-003-1.png",
                            "marca": "Nike",
                            "modelo": "Air Max 200",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo-1971-.....jpg"
                        }
                    },
                    {
                        "label": "Vapormax",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.lojanike.com.br/1024x1024/produto/tenis-air-vapormax-2021-fk-DH4084-001-1.jpg",
                            "marca": "Nike",
                            "modelo": "Vapormax",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo-1971-.....jpg"
                        }
                    },
                    {
                        "label": "Nike Shox TL",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "data:image/jpeg;base64,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",
                            "marca": "Nike",
                            "modelo": "Nike Shox TL",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo-1971-.....jpg"
                        }
                    },
                    {
                        "label": "Air Max Plus",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-plus-masculino-604133-139-1-11627567828.jpg",
                            "marca": "Nike",
                            "modelo": "Air Max Plus",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo-1971-.....jpg"
                        }
                    },
                    {
                        "label": "Nike Dunk",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.lojanike.com.br/1024x1024/produto/dunk-low-DD1391-100-1.jpg",
                            "marca": "Nike",
                            "modelo": "Nike Dunk",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo-1971-.....jpg"
                        }
                    }
                ]
            },

            {
                label: 'Adidas',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png',
                    modelo: '',
                    marca: 'Adidas'
                },
                items: [
                    {
                        label: 'Super Star',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4d31131033b54e67b045ab2f017c6cda_9366/Tenis_Superstar_(UNISSEX)_Branco_FU7714_01_standard.jpg',
                            modelo: 'Super Star',
                            marca: 'Adidas',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png'
                        }
                    },
                    {
                        label: 'Grand Court',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/8c687d94b5654d4bb435a97f00d5a475_9366/Tenis_Grand_Court_Branco_F36392_01_standard.jpg',
                            modelo: 'Grand Court',
                            marca: 'Adidas',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png'
                        }
                    },
                    {
                        label: 'Yeezy Boost 350',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://static.anurbanshop.com.br/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/c/p/cp9654_1_1png.png',
                            modelo: 'Yeezy Boost 350',
                            marca: 'Adidas',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png'
                        }
                    },
                    {
                        label: 'Yeezy Boost 700',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://cdn-images.farfetch-contents.com/12/96/03/48/12960348_23445031_600.jpg',
                            modelo: 'Yeezy Boost 700',
                            marca: 'Adidas',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png'
                        }
                    },
                    {
                        label: 'Energy Falcon',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Tenis_Energyfalcon_Preto_EE9843_01_standard.jpg',
                            modelo: 'Energy Falcon',
                            marca: 'Adidas',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png'
                        }
                    },
                    {
                        label: 'Harden Stepback 2',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/9e66cb1fec224f98b473ac240138dc4c_9366/Tenis_Harden_Stepback_2_Preto_FZ1384_01_standard.jpg',
                            modelo: 'Harden Stepback 2',
                            marca: 'Adidas',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png'
                        }
                    },
                    {
                        label: 'Nmd',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'http://cdn.shopify.com/s/files/1/0088/1587/0029/products/TENISADIDASNMDR1PRETOMASCULINO_1_31859aee-b9af-41f5-8af9-e616f711bdf4_grande.jpg?v=1614793176',
                            modelo: 'Nmd',
                            marca: 'Adidas',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png'
                        }
                    },
                    {
                        label: 'Courtjam Bounce',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/b50298c3033e4c90b407ad0500e4cfdc_9366/Tenis_CourtJam_Bounce_Branco_H67702_01_standard.jpg',
                            modelo: 'Courtjam Bounce',
                            marca: 'Adidas',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png'
                        }
                    },
                    {
                        label: 'Upath Run',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/4596353218be466eae7cac6f00d98f1f_9366/Tenis_UPATH_RUN_Preto_CM1457_01_standard.jpg',
                            modelo: 'Upath Run',
                            marca: 'Adidas',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png'
                        }
                    },
                    {
                        label: 'Fluid Street',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5bc6230d24924736ab03ab4a009aed6c_9366/Tenis_Fluidstreet_Preto_FW1703_01_standard.jpg',
                            modelo: 'Fluid Street',
                            marca: 'Adidas',
                            imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png'
                        }
                    }
                ]
            },

            {

                label: 'Puma',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logosmarcas.net/wp-content/uploads/2020/04/Puma-Logo.png',
                    modelo: '',
                    marca: 'Puma'
                },
                items: [
                    {
                        label: 'Smash v2',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://static.netshoes.com.br/produtos/tenis-puma-smash-v2/26/D14-4129-026/D14-4129-026_zoom1.jpg?ts=1594381760&ims=544x',
                            modelo: 'Smash v2',
                            marca: 'Puma',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Puma-Logo.png'
                        }
                    },
                    {
                        label: 'Smash v3',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://imgcentauro-a.akamaihd.net/500x500/96321931/tenis-puma-smash-v3-bdp-feminino-img.jpg',
                            modelo: 'Smash v3',
                            marca: 'Puma',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Puma-Logo.png'
                        }
                    },
                    {
                        label: 'X-Ray',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://imgcentauro-a.akamaihd.net/900x900/95195431/tenis-puma-x-ray-2-square-bdp-masculino-img.jpg',
                            modelo: 'X-Ray',
                            marca: 'Puma',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Puma-Logo.png'
                        }
                    },
                    {
                        label: 'Wired Run',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://static.netshoes.com.br/produtos/tenis-puma-wired-run-bdp/09/2I3-2082-309/2I3-2082-309_zoom1.jpg?ts=1628371388',
                            modelo: 'Wired Run',
                            marca: 'Puma',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Puma-Logo.png'
                        }
                    },
                    {
                        label: 'Suede',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'http://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_puma_suede_classic_-_blackwhite_2__1_grande.jpg',
                            modelo: 'Suede',
                            marca: 'Puma',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Puma-Logo.png'
                        }
                    },
                    {
                        label: 'RS - Fast',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://i0.wp.com/vgmultimarcas.com/wp-content/uploads/2021/09/255255255-4.jpg?fit=1000%2C1000&ssl=1',
                            modelo: 'RS - Fast',
                            marca: 'Puma',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Puma-Logo.png'
                        }
                    },
                    {
                        label: 'Caven',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'data:image/jpeg;base64,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',
                            modelo: 'Caven',
                            marca: 'Puma',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Puma-Logo.png'
                        }
                    },
                    {
                        label: 'Disk',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://static.netshoes.com.br/produtos/tenis-puma-disc-cell-aether-masculino/20/D14-8053-120/D14-8053-120_zoom1.jpg?ts=1587422720',
                            modelo: 'Disk',
                            marca: 'Puma',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Puma-Logo.png'
                        }
                    },
                    {
                        label: 'Softride',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://static.netshoes.com.br/produtos/tenis-puma-softride-enzo-nxt-bdp-masculino/36/2I3-2173-036/2I3-2173-036_zoom1.jpg?ts=1629738048',
                            modelo: 'Softride',
                            marca: 'Puma',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Puma-Logo.png'
                        }
                    },
                    {
                        label: 'Anzarun',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            url: 'https://static.netshoes.com.br/produtos/tenis-puma-anzarun-lite/26/NWG-0306-026/NWG-0306-026_zoom1.jpg?ts=1580291642&ims=544x',
                            modelo: 'Anzarun',
                            marca: 'Puma',
                            imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Puma-Logo.png'
                        }
                    }
                ]
            },

            {
                label: 'Jordan',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logosmarcas.net/wp-content/uploads/2020/04/Air-Jordan-Logo.png',
                    modelo: '',
                    marca: 'Jordan'
                },

                items: [
                    {
                        "label": "Air Jordan 1",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.cloud-boxloja.com/lojas/ym522/produtos/06651b55-c32c-4a40-a22c-ae4369a3e53c.jpg",
                            "marca": "Jordan",
                            "modelo": "Air Jordan 1",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Air-Jordan-Logo.png"
                        }
                    },
                    {
                        "label": "Air Jordan 2",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-ii-retro-decon-masculino-897521-100-1.png",
                            "marca": "Jordan",
                            "modelo": "Air Jordan 2",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Air-Jordan-Logo.png"
                        }
                    },
                    {
                        "label": "Air Jordan 3",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.cloud-boxloja.com/lojas/ym522/produtos/8075b8c8-0ccf-4482-bb2c-26bdd0ebd418.jpg",
                            "marca": "Jordan",
                            "modelo": "Air Jordan 3",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Air-Jordan-Logo.png"
                        }
                    },
                    {
                        "label": "Air Jordan 4",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://d3ugyf2ht6aenh.cloudfront.net/stores/933/187/products/copia-de-design-sem-nome31-5a0f00fb8776f31dac15861899205611-1024-1024.png",
                            "marca": "Jordan",
                            "modelo": "Air Jordan 4",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Air-Jordan-Logo.png"
                        }
                    },
                    {
                        "label": "Air Jordan 5",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn-images.farfetch-contents.com/15/53/78/48/15537848_27979944_600.jpg",
                            "marca": "Jordan",
                            "modelo": "Air Jordan 5",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Air-Jordan-Logo.png"
                        }
                    },
                    {
                        "label": "Air Jordan 6",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn-images.farfetch-contents.com/13/81/21/06/13812106_17043783_600.jpg",
                            "marca": "Jordan",
                            "modelo": "Air Jordan 6",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Air-Jordan-Logo.png"
                        }
                    },
                    {
                        "label": "Air Jordan 7",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.cloud-boxloja.com/lojas/ym522/produtos/feca1bc7-6f36-4696-9b40-8aa504c0ffba.jpg",
                            "marca": "Jordan",
                            "modelo": "Air Jordan 7",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Air-Jordan-Logo.png"
                        }
                    },
                    {
                        "label": "Air Jordan 8",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.cloud-boxloja.com/lojas/ym522/produtos/36115ee6-c2ac-47e7-b491-dce4e5670d9c.jpg",
                            "marca": "Jordan",
                            "modelo": "Air Jordan 8",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Air-Jordan-Logo.png"
                        }
                    },
                    {
                        "label": "Air Jordan 9",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "data:image/jpeg;base64,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",
                            "marca": "Jordan",
                            "modelo": "Air Jordan 9",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Air-Jordan-Logo.png"
                        }
                    },
                    {
                        "label": "Air Jordan 10",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://d3ugyf2ht6aenh.cloudfront.net/stores/933/187/products/design-sem-nome-2161-4adf6b6bc8ccded2e816058136168270-1024-1024.png",
                            "marca": "Jordan",
                            "modelo": "Air Jordan 10",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Air-Jordan-Logo.png"
                        }
                    }
                ]
            },

            {
                label: 'Vans',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logosmarcas.net/wp-content/uploads/2020/04/Vans-Logo-1966%E2%80%93presente.jpg',
                    modelo: '',
                    marca: 'Vans'
                },

                items: [
                    {
                        "label": "Old School",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.tshirtinbox.com.br/wp-content/uploads/2021/02/tenis_vans_old_skool_black_and_white_4275_4_20200808110337-1.jpg",
                            "marca": "Vans",
                            "modelo": "Old School",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Vans-Logo-1966%E2%80%93presente.jpg"
                        }
                    },
                    {
                        "label": "Authentic",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h29/h4a/h00/h00/10285262110750/1002000450011U-01-BASEIMAGE-Midres.jpg",
                            "marca": "Vans",
                            "modelo": "Authentic",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Vans-Logo-1966%E2%80%93presente.jpg"
                        }
                    },
                    {
                        "label": "Ultrarange Rapidweld",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://overboard.vteximg.com.br/arquivos/ids/238534-1000-1000/084681702012_1.jpg?v=637221646324470000",
                            "marca": "Vans",
                            "modelo": "Ultrarange Rapidweld",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Vans-Logo-1966%E2%80%93presente.jpg"
                        }
                    },
                    {
                        "label": "Ultrarange Exo",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h05/hbd/h00/h00/9843098419230/1003500530007U-01-BASEIMAGE-Midres.jpg",
                            "marca": "Vans",
                            "modelo": "Ultrarange Exo",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Vans-Logo-1966%E2%80%93presente.jpg"
                        }
                    },
                    {
                        "label": "SK8",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://artwalk.vteximg.com.br/arquivos/ids/229645-1000-1000/Tenis-Vans-Sk8-Low-Preto.jpg?v=637457284446300000",
                            "marca": "Vans",
                            "modelo": "SK8",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Vans-Logo-1966%E2%80%93presente.jpg"
                        }
                    },
                    {
                        "label": "SK8 HI",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h32/h25/h00/h00/10172676997150/1002001230081U-01-BASEIMAGE-Midres.jpg",
                            "marca": "Vans",
                            "modelo": "SK8 HI",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Vans-Logo-1966%E2%80%93presente.jpg"
                        }
                    },
                    {
                        "label": "Wm Filmore",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://rogerstenis.vteximg.com.br/arquivos/ids/2740996-505-505/1000887651_1.jpg?v=637570451324370000",
                            "marca": "Vans",
                            "modelo": "Wm Filmore",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Vans-Logo-1966%E2%80%93presente.jpg"
                        }
                    },
                    {
                        "label": "Atwood",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.dafiti.com.br/p/Vans-T%C3%AAnis-Vans-Atwood-Preto-1774-3850322-1-zoom.jpg",
                            "marca": "Vans",
                            "modelo": "Atwood",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Vans-Logo-1966%E2%80%93presente.jpg"
                        }
                    },
                    {
                        "label": "Lindero",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.rockcity.com.br/public/rockcity/imagens/produtos/457434c690cf0ecf57ba7611d67a9589.jpg",
                            "marca": "Vans",
                            "modelo": "Lindero",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Vans-Logo-1966%E2%80%93presente.jpg"
                        }
                    },
                    {
                        "label": "Faulkner",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.dressinn.com/f/125/1253009/vans-faulkner.jpg",
                            "marca": "Vans",
                            "modelo": "Faulkner",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Vans-Logo-1966%E2%80%93presente.jpg"
                        }
                    }
                ]
            },  

            {
                label: 'Olympikus',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logodownload.org/wp-content/uploads/2017/06/olympikus-logo.png',
                    modelo: '',
                    marca: 'Olympikus'
                },

                items: [
                    {
                        "label": "Lux",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://a-static.mlcdn.com.br/618x463/tenis-olympikus-lux-feminino/vulcabras/18202/5f1289bad4b77e04fc161dfcc1fadfe6.jpg",
                            "marca": "Olympikus",
                            "modelo": "Lux",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2017/06/olympikus-logo.png"
                        }
                    },
                    {
                        "label": "Angel 2",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images-americanas.b2w.io/produtos/01/00/img/1547595/0/1547595028_1GG.jpg",
                            "marca": "Olympikus",
                            "modelo": "Angel 2",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2017/06/olympikus-logo.png"
                        }
                    },
                    {
                        "label": "Fly",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-olympikus-fly-/14/D22-2814-014/D22-2814-014_zoom1.jpg?ts=1587441843",
                            "marca": "Olympikus",
                            "modelo": "Fly",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2017/06/olympikus-logo.png"
                        }
                    },
                    {
                        "label": "Vênus",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-olympikus-venus-feminino/06/D22-3311-006/D22-3311-006_zoom1.jpg?ts=1574416719&ims=544x",
                            "marca": "Olympikus",
                            "modelo": "Vênus",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2017/06/olympikus-logo.png"
                        }
                    },
                    {
                        "label": "Correl SP",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-olympikus-corre-1-sp/06/D22-3785-006/D22-3785-006_zoom1.jpg?ts=1585311361",
                            "marca": "Olympikus",
                            "modelo": "Correl SP",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2017/06/olympikus-logo.png"
                        }
                    },
                    {
                        "label": "Veloz",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.zattini.com.br/produtos/tenis-olympikus-veloz/95/D22-4213-095/D22-4213-095_zoom1.jpg?ts=1601306448",
                            "marca": "Olympikus",
                            "modelo": "Veloz",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2017/06/olympikus-logo.png"
                        }
                    },
                    {
                        "label": "Easy",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-olympikus-easy-feminino/06/D22-2763-006/D22-2763-006_zoom1.jpg?ts=1587107154",
                            "marca": "Olympikus",
                            "modelo": "Easy",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2017/06/olympikus-logo.png"
                        }
                    },
                    {
                        "label": "Ultraleve",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-olympikus-ultraleve-feminino/06/D22-3859-006/D22-3859-006_zoom1.jpg?ts=1606211502&ims=544x",
                            "marca": "Olympikus",
                            "modelo": "Ultraleve",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2017/06/olympikus-logo.png"
                        }
                    },
                    {
                        "label": "Flower 2",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-olympikus-flower-2-feminino/61/D22-2762-461/D22-2762-461_zoom1.jpg?ts=1565201454&ims=544x",
                            "marca": "Olympikus",
                            "modelo": "Flower 2",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2017/06/olympikus-logo.png"
                        }
                    },
                    {
                        "label": "Glam",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-olympikus-glam-feminino/12/D22-1777-012/D22-1777-012_zoom1.jpg?ts=1587548064",
                            "marca": "Olympikus",
                            "modelo": "Glam",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2017/06/olympikus-logo.png"
                        }
                    }
                ]
            },  

            {
                label: 'Umbro',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logodownload.org/wp-content/uploads/2014/10/umbro-logo-1.png',
                    modelo: '',
                    marca: 'Umbro'
                },
            
                items: [
                    {
                        "label": "Soul Knit",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://imgcentauro-a.akamaihd.net/900x900/92129531.jpg",
                            "marca": "Umbro",
                            "modelo": "Soul Knit",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/10/umbro-logo-1.png"
                        }
                    },
                    {
                        "label": "Neptune",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://umbro.vtexassets.com/arquivos/ids/429594-800-auto?v=637526406951000000&width=800&height=auto&aspect=true",
                            "marca": "Umbro",
                            "modelo": "Neptune",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/10/umbro-logo-1.png"
                        }
                    },
                    {
                        "label": "Indoor Umbro Pro 5",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://umbro.vtexassets.com/arquivos/ids/440298/0F72149_103.jpg?v=637705262197300000",
                            "marca": "Umbro",
                            "modelo": "Indoor Umbro Pro 5",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/10/umbro-logo-1.png"
                        }
                    },
                    {
                        "label": "Speciali Hup",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://umbro.vtexassets.com/arquivos/ids/429824-800-auto?v=637526418030170000&width=800&height=auto&aspect=true",
                            "marca": "Umbro",
                            "modelo": "Speciali Hup",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/10/umbro-logo-1.png"
                        }
                    },
                    {
                        "label": "Water Lane",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://umbro.vtexassets.com/arquivos/ids/437079-800-auto?v=637650130952170000&width=800&height=auto&aspect=true",
                            "marca": "Umbro",
                            "modelo": "Water Lane",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/10/umbro-logo-1.png"
                        }
                    },
                    {
                        "label": "Bumpy",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://umbro.vtexassets.com/arquivos/ids/429486-800-auto?v=637526401113470000&width=800&height=auto&aspect=true",
                            "marca": "Umbro",
                            "modelo": "Bumpy",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/10/umbro-logo-1.png"
                        }
                    },
                    {
                        "label": "Street Jogger",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://umbro.vtexassets.com/arquivos/ids/429503-800-auto?v=637526402489830000&width=800&height=auto&aspect=true",
                            "marca": "Umbro",
                            "modelo": "Street Jogger",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/10/umbro-logo-1.png"
                        }
                    },
                    {
                        "label": "Old Cup",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://umbro.vtexassets.com/arquivos/ids/437011/0S74039_272.jpg?v=637650120180670000",
                            "marca": "Umbro",
                            "modelo": "Old Cup",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/10/umbro-logo-1.png"
                        }
                    },
                    {
                        "label": "Street f5",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://umbro.vtexassets.com/arquivos/ids/437384-800-auto?v=637650190974730000&width=800&height=auto&aspect=true",
                            "marca": "Umbro",
                            "modelo": "Street f5",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/10/umbro-logo-1.png"
                        }
                    },
                    {
                        "label": "Striker 6",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://imgcentauro-a.akamaihd.net/900x900/94042905/chuteira-society-umbro-striker-6-tf-adulto-img.jpg",
                            "marca": "Umbro",
                            "modelo": "Striker 6",
                            "imgMarca": "https://logodownload.org/wp-content/uploads/2014/10/umbro-logo-1.png"
                        }
                    }
                ]
            },
            
            {
                label: 'Mizuno',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://static.cloud-boxloja.com/lojas/wyfyg/produtos/fc798795-7543-4b70-aa84-73f7d90dc3bc.jpg',
                    modelo: '',
                    marca: 'Mizuno'
                },
            
                items: [
                    {
                        "label": "Prophecy 1",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "http://d26lpennugtm8s.cloudfront.net/stores/001/318/968/products/1151-4f9fce053d1b3cddb915979870562114-640-0.jpg",
                            "marca": "Mizuno",
                            "modelo": "Prophecy 1",
                            "imgMarca": "https://static.cloud-boxloja.com/lojas/wyfyg/produtos/fc798795-7543-4b70-aa84-73f7d90dc3bc.jpg"
                        }
                    },
                    {
                        "label": "Prophecy 2",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://tatuapeoutlet.com.br/wp-content/uploads/2020/04/tenis-mizuno-wave-prophecy-2-prata-e-vermelho-2.jpg",
                            "marca": "Mizuno",
                            "modelo": "Prophecy 2",
                            "imgMarca": "https://static.cloud-boxloja.com/lojas/wyfyg/produtos/fc798795-7543-4b70-aa84-73f7d90dc3bc.jpg"
                        }
                    },
                    {
                        "label": "Prophecy 3",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-running-mizuno-prophecy-3-4130393/26/D16-1300-926/D16-1300-926_zoom1.jpg?ts=1636385444",
                            "marca": "Mizuno",
                            "modelo": "Prophecy 3",
                            "imgMarca": "https://static.cloud-boxloja.com/lojas/wyfyg/produtos/fc798795-7543-4b70-aa84-73f7d90dc3bc.jpg"
                        }
                    },
                    {
                        "label": "Prophecy 4",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-4-feminino/15/D16-0054-815/D16-0054-815_zoom1.jpg?ts=1632326550",
                            "marca": "Mizuno",
                            "modelo": "Prophecy 4",
                            "imgMarca": "https://static.cloud-boxloja.com/lojas/wyfyg/produtos/fc798795-7543-4b70-aa84-73f7d90dc3bc.jpg"
                        }
                    },
                    {
                        "label": "Prophecy 5",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "data:image/jpeg;base64,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",
                            "marca": "Mizuno",
                            "modelo": "Prophecy 5",
                            "imgMarca": "https://static.cloud-boxloja.com/lojas/wyfyg/produtos/fc798795-7543-4b70-aa84-73f7d90dc3bc.jpg"
                        }
                    },
                    {
                        "label": "Prophecy 6",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "http://d3ugyf2ht6aenh.cloudfront.net/stores/536/783/products/mizuno-wave-prophecy-6-original-cinzaeroxo1-0f6f0d474e02499acf15239978876906-640-0.png",
                            "marca": "Mizuno",
                            "modelo": "Prophecy 6",
                            "imgMarca": "https://static.cloud-boxloja.com/lojas/wyfyg/produtos/fc798795-7543-4b70-aa84-73f7d90dc3bc.jpg"
                        }
                    },
                    {
                        "label": "Prophecy 7",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1726026196",
                            "marca": "Mizuno",
                            "modelo": "Prophecy 7",
                            "imgMarca": "https://static.cloud-boxloja.com/lojas/wyfyg/produtos/fc798795-7543-4b70-aa84-73f7d90dc3bc.jpg"
                        }
                    },
                    {
                        "label": "Prophecy 8",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-8-feminino/77/D16-2703-977/D16-2703-977_zoom1.jpg?ts=1573663860",
                            "marca": "Mizuno",
                            "modelo": "Prophecy 8",
                            "imgMarca": "https://static.cloud-boxloja.com/lojas/wyfyg/produtos/fc798795-7543-4b70-aa84-73f7d90dc3bc.jpg"
                        }
                    },
                    {
                        "label": "Prophecy 9",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-mizuno-wave-prophecy-9/16/D16-5355-216/D16-5355-216_zoom1.jpg?ts=1599149353&ims=544x",
                            "marca": "Mizuno",
                            "modelo": "Prophecy 9",
                            "imgMarca": "https://static.cloud-boxloja.com/lojas/wyfyg/produtos/fc798795-7543-4b70-aa84-73f7d90dc3bc.jpg"
                        }
                    },
                    {
                        "label": "Prophecy 10",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.dafiti.com.br/p/Mizuno-Tenis-Mizuno-Wave-Prophecy-10-6271-9424297-1-zoom.jpg",
                            "marca": "Mizuno",
                            "modelo": "Prophecy 10",
                            "imgMarca": "https://static.cloud-boxloja.com/lojas/wyfyg/produtos/fc798795-7543-4b70-aa84-73f7d90dc3bc.jpg"
                        }
                    }
                ]
            },

            {
                label: 'Under Armour',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logosmarcas.net/wp-content/uploads/2020/04/Under-Armour-Logo.png',
                    modelo: '',
                    marca: 'Under Armour'
                },
            
                items: [
                    {
                        "label": "Charged Raze",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "data:image/jpeg;base64,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",
                            "marca": "Under Armour",
                            "modelo": "Charged Raze",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Under-Armour-Logo.png"
                        }
                    },
                    {
                        "label": "Charged Odyssey",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://underarmourbr.vteximg.com.br/arquivos/ids/158446-1000-1000/3023423-004-36-1.jpg?v=637508554312600000",
                            "marca": "Under Armour",
                            "modelo": "Charged Odyssey",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Under-Armour-Logo.png"
                        }
                    },
                    {
                        "label": "Charged Victory",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-under-armour-charged-victory-masculino/26/B78-9375-026/B78-9375-026_zoom5.jpg?ts=1621352414&ims=544x",
                            "marca": "Under Armour",
                            "modelo": "Charged Victory",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Under-Armour-Logo.png"
                        }
                    },
                    {
                        "label": "Charged Stamina",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-under-armour-charged-stamina/72/39W-0090-172/39W-0090-172_zoom1.jpg?ts=1617974651",
                            "marca": "Under Armour",
                            "modelo": "Charged Stamina",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Under-Armour-Logo.png"
                        }
                    },
                    {
                        "label": "Charged TRVRS",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-under-armour-charged-trvrs/72/39W-0091-172/39W-0091-172_zoom1.jpg?ts=1618828527&ims=544x",
                            "marca": "Under Armour",
                            "modelo": "Charged TRVRS",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Under-Armour-Logo.png"
                        }
                    },
                    {
                        "label": "Charged Hovr Phantom",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://underarmourbr.vteximg.com.br/arquivos/ids/170400-1000-1000/3023629-100-38-1.jpg?v=637520779606830000",
                            "marca": "Under Armour",
                            "modelo": "Charged Hovr Phantom",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Under-Armour-Logo.png"
                        }
                    },
                    {
                        "label": "Charged Slight",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-under-armour-charged-slight/06/B78-4863-006/B78-4863-006_zoom1.jpg?ts=1637170898",
                            "marca": "Under Armour",
                            "modelo": "Charged Slight",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Under-Armour-Logo.png"
                        }
                    },
                    {
                        "label": "Charged Surpass",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-under-armour-charged-surpass-masculino-40-pretocinza/72/B78-9750-172/B78-9750-172_zoom1.jpg?ts=1617020374",
                            "marca": "Under Armour",
                            "modelo": "Charged Surpass",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Under-Armour-Logo.png"
                        }
                    },
                    {
                        "label": "Charged Cruise",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://underarmourbr.vteximg.com.br/arquivos/ids/161399-1000-1000/3023425-002-37-1.jpg?v=637494934303700000",
                            "marca": "Under Armour",
                            "modelo": "Charged Cruise",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Under-Armour-Logo.png"
                        }
                    },
                    {
                        "label": "Charged Envolve 2",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/tenis-under-armour-charged-envolve-2-masculino/16/B78-7520-216/B78-7520-216_zoom1.jpg?ts=1610981248&ims=544x",
                            "marca": "Under Armour",
                            "modelo": "Charged Envolve 2",
                            "imgMarca": "https://logosmarcas.net/wp-content/uploads/2020/04/Under-Armour-Logo.png"
                        }
                    }
                ]
            },
          
            {
                label: 'Chuteiras',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/Desenho-Chuteira-PNG.png',
                    modelo: '',
                    marca: 'Chuteiras'
                },

                items: [
                    {
                        "label": "Nike Mercurial",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/chuteira-campo-nike-mercurial-superfly-8-club/04/HZM-5383-304/HZM-5383-304_zoom1.jpg?ts=1615298919",
                            "marca": "Chuteiras",
                            "modelo": "Nike Mercurial",
                            "imgMarca": "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/Desenho-Chuteira-PNG.png"
                        }
                    },
                    {
                        "label": "Nike Hypervenom",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.awsli.com.br/600x450/258/258557/produto/9716858/626a442c68.jpg",
                            "marca": "Chuteiras",
                            "modelo": "Nike Hypervenom",
                            "imgMarca": "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/Desenho-Chuteira-PNG.png"
                        }
                    },
                    {
                        "label": "Nike Tiempo",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/chuteira-campo-nike-tiempo-legend-8-academy/68/HZM-1907-068/HZM-1907-068_zoom1.jpg?ts=1579721707&ims=544x",
                            "marca": "Chuteiras",
                            "modelo": "Nike Tiempo",
                            "imgMarca": "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/Desenho-Chuteira-PNG.png"
                        }
                    },
                    {
                        "label": "Nike Magista",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.lojanike.com.br/1024x1024/produto/chuteira-nike-magista-obra-ii-844595-414-1.png",
                            "marca": "Chuteiras",
                            "modelo": "Nike Magista",
                            "imgMarca": "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/Desenho-Chuteira-PNG.png"
                        }
                    },
                    {
                        "label": "Adidas x 19",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://d3ugyf2ht6aenh.cloudfront.net/stores/302/496/products/371-02caa5c5d91f07551515666168322122-240-0.jpg",
                            "marca": "Chuteiras",
                            "modelo": "Adidas x 19",
                            "imgMarca": "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/Desenho-Chuteira-PNG.png"
                        }
                    },
                    {
                        "label": "Adidas x 17.1",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static3.tcdn.com.br/img/img_prod/311840/chuteira_adidas_x_17_1_fg_campo_40643_1_20210806215616.jpg",
                            "marca": "Chuteiras",
                            "modelo": "Adidas x 17.1",
                            "imgMarca": "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/Desenho-Chuteira-PNG.png"
                        }
                    },
                    {
                        "label": "Adidas Predador",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://assets.adidas.com/images/w_600,f_auto,q_auto/e4d6e938854444d9bfd5acc2010d8303_9366/Chuteira_Predator_Freak.1_Campo_Vermelho_FY6266_01_standard.jpg",
                            "marca": "Chuteiras",
                            "modelo": "Adidas Predador",
                            "imgMarca": "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/Desenho-Chuteira-PNG.png"
                        }
                    },
                    {
                        "label": "Adidas Nemeziz",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEhMSExMUFRMVEhoSExYWFhUTEhIVGBIXFhUXFRcZHDQgGRolGxUTITEhJikrLjouFyI1RDMtNygtLisBCgoKDg0OGhAQGjclHyUtLS0tLS0vLSstLS0tLS0tLS0tNy0rLSs3LS0tLS0tLS0rLS4tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwYEBQcCAQj/xABBEAACAQIDBQQFCgQFBQAAAAABAgADEQQSIQUxQVFhBhMicTJSYoGRBxRCU2NygpKhsSPB4fBDc4PS8RYzk6Kj/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIxEBAAICAgICAgMAAAAAAAAAAAECAxEhMRITBFEUIkFxof/aAAwDAQACEQMRAD8A7FERKhERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERATFO0aWYrmuQbGwJseV+clxVcU0dzuRC58lUn+Up2xb2BYjMblrtc3Y3PGIFzWqp4/ynuaulUPMf375kK3WXQzImL3h5/wA55bEuPo5vLQ/rpGpGZExqeNU6HQ8joZkA3kH2IiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgaTthXy4Z141CtMa20Ju3/qGmo2abW1X3f8yHtntWk+Jp4TMveIne5SbElzZbaakBSbe0J7wpItqo/vzmoRvaNTqfh/STq3nMChV6/p/SZSt5/tNDJB/u89A/3eY6+X6yQKfVX4/0kV7qKrCxAI5HX95GtFk1Qkj1SSSPusf2PxE+LVGbIGpl7Xy5hmtztvtMxRl32v8AoJUBUIFyPjpPaOCLiRZczDXqfLkOQvb4T6db2BBHuO/eOhmdKmiQ5203W4/ytPVKrmvoRbobe48ZNSbSRESBERAREQEREBERAREQEREBERARE13aHFmjh6rC+bLkW2/M5Cgjyvf3QOMv2YqbXx+JxVVimGbENkJ9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",
                            "marca": "Chuteiras",
                            "modelo": "Adidas Nemeziz",
                            "imgMarca": "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/Desenho-Chuteira-PNG.png"
                        }
                    },
                    {
                        "label": "Puma King",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://images.puma.net/images/105607/01/w/1000/h/1000/fnd/BRA/",
                            "marca": "Chuteiras",
                            "modelo": "Puma King",
                            "imgMarca": "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/Desenho-Chuteira-PNG.png"
                        }
                    },
                    {
                        "label": "Puma Future Z",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://static.netshoes.com.br/produtos/chuteira-campo-puma-future-z-12/92/2I3-2514-392/2I3-2514-392_zoom1.jpg?ts=1627040353",
                            "marca": "Chuteiras",
                            "modelo": "Puma Future Z",
                            "imgMarca": "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/Desenho-Chuteira-PNG.png"
                        }
                    }
                ]
            }
        ]
    }
}

