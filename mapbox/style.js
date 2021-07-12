
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "CartoDark_0": {
            "type": "raster",
            "tiles": ["http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Rios_1": {
            "type": "geojson",
            "data": json_Rios_1
        }
                    ,
        "Divisadebairros_2": {
            "type": "geojson",
            "data": json_Divisadebairros_2
        }
                    ,
        "Parquesybosques_3": {
            "type": "geojson",
            "data": json_Parquesybosques_3
        }
                    ,
        "Zoneamiento_4": {
            "type": "geojson",
            "data": json_Zoneamiento_4
        }
                    ,
        "Divisaderegionais_5": {
            "type": "geojson",
            "data": json_Divisaderegionais_5
        }
                    ,
        "Sistemaviarioclassificado_6": {
            "type": "geojson",
            "data": json_Sistemaviarioclassificado_6
        }
                    ,
        "Escolamunicipal_7": {
            "type": "geojson",
            "data": json_Escolamunicipal_7
        }
                    ,
        "Hospital_8": {
            "type": "geojson",
            "data": json_Hospital_8
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_CartoDark_0_0",
            "type": "raster",
            "source": "CartoDark_0"
        },
        {
            "id": "lyr_Rios_1_0",
            "type": "fill",
            "source": "Rios_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#25e8eb'}
        }
,
        {
            "id": "lyr_Divisadebairros_2_0",
            "type": "fill",
            "source": "Divisadebairros_2",
            "layout": {},
            "paint": {'fill-opacity': 0.609, 'fill-color': '#6483ac'}
        }
,
        {
            "id": "lyr_Parquesybosques_3_0",
            "type": "fill",
            "source": "Parquesybosques_3",
            "layout": {},
            "paint": {'fill-opacity': 0.7709999999999999, 'fill-color': '#00fa04'}
        }
,
        {
            "id": "lyr_Zoneamiento_4_0",
            "type": "fill",
            "source": "Zoneamiento_4",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'NM_GRUPO'], 'ÁREA DE PROTEÇÃO AMBIENTAL DO IGUAÇU'], 0.625, ['==', ['get', 'NM_GRUPO'], 'ÁREA DE PROTEÇÃO AMBIENTAL DO PASSAÚNA'], 0.625, ['==', ['get', 'NM_GRUPO'], 'EIXO ESTRUTURANTES'], 0.625, ['==', ['get', 'NM_GRUPO'], 'EIXO METROPOLITANO - LINHA VERDE'], 0.625, ['==', ['get', 'NM_GRUPO'], 'EIXOS CONECTORES'], 0.625, ['==', ['get', 'NM_GRUPO'], 'EIXOS DE ADENSAMENTO'], 0.625, ['==', ['get', 'NM_GRUPO'], 'SETORES ESPECIAIS'], 0.625, ['==', ['get', 'NM_GRUPO'], 'UNIDADE DE CONSERVAÇÃO'], 0.625, ['==', ['get', 'NM_GRUPO'], 'ZONA CENTRAL'], 0.625, ['==', ['get', 'NM_GRUPO'], 'ZONAS COM DESTINAÇÃO ESPECÍFICA'], 0.625, ['==', ['get', 'NM_GRUPO'], 'ZONAS DE USO MISTO'], 0.625, ['==', ['get', 'NM_GRUPO'], 'ZONAS RESIDENCIAIS'], 0.625, 0], 'fill-color': ['case', ['==', ['get', 'NM_GRUPO'], 'ÁREA DE PROTEÇÃO AMBIENTAL DO IGUAÇU'], '#440154', ['==', ['get', 'NM_GRUPO'], 'ÁREA DE PROTEÇÃO AMBIENTAL DO PASSAÚNA'], '#482173', ['==', ['get', 'NM_GRUPO'], 'EIXO ESTRUTURANTES'], '#423e85', ['==', ['get', 'NM_GRUPO'], 'EIXO METROPOLITANO - LINHA VERDE'], '#38588c', ['==', ['get', 'NM_GRUPO'], 'EIXOS CONECTORES'], '#2d6f8e', ['==', ['get', 'NM_GRUPO'], 'EIXOS DE ADENSAMENTO'], '#24858e', ['==', ['get', 'NM_GRUPO'], 'SETORES ESPECIAIS'], '#1e9b89', ['==', ['get', 'NM_GRUPO'], 'UNIDADE DE CONSERVAÇÃO'], '#2ab07e', ['==', ['get', 'NM_GRUPO'], 'ZONA CENTRAL'], '#51c569', ['==', ['get', 'NM_GRUPO'], 'ZONAS COM DESTINAÇÃO ESPECÍFICA'], '#85d54a', ['==', ['get', 'NM_GRUPO'], 'ZONAS DE USO MISTO'], '#c2e023', ['==', ['get', 'NM_GRUPO'], 'ZONAS RESIDENCIAIS'], '#fde725', '#ffffff']}
        }
,
        {
            "id": "lyr_Divisaderegionais_5_0",
            "type": "line",
            "source": "Divisaderegionais_5",
            "layout": {},
            "paint": {'line-width': 0.7142857142857143, 'line-opacity': 1.0, 'line-color': '#ffffff'}
        }
,
        {
            "id": "lyr_Sistemaviarioclassificado_6_0",
            "type": "line",
            "source": "Sistemaviarioclassificado_6",
            "layout": {},
            "paint": {'line-width': ['case', ['==', ['get', 'SIST_VIARI'], 'CENTRAL'], 1.4285714285714286, ['==', ['get', 'SIST_VIARI'], 'COLETORA 1'], 0.35714285714285715, ['==', ['get', 'SIST_VIARI'], 'COLETORA 2'], 0.7142857142857143, ['==', ['get', 'SIST_VIARI'], 'EXTERNA'], 0.35714285714285715, ['==', ['get', 'SIST_VIARI'], 'OUTRAS VIAS'], 0.9285714285714285, ['==', ['get', 'SIST_VIARI'], 'PRIORITÁRIA'], 0.9285714285714285, ['==', ['get', 'SIST_VIARI'], 'SETORIAL 1'], 0.7142857142857143, ['==', ['get', 'SIST_VIARI'], 'SETORIAL 2'], 1.0714285714285714, 0], 'line-opacity': ['case', ['==', ['get', 'SIST_VIARI'], 'CENTRAL'], 1.0, ['==', ['get', 'SIST_VIARI'], 'COLETORA 1'], 1.0, ['==', ['get', 'SIST_VIARI'], 'COLETORA 2'], 1.0, ['==', ['get', 'SIST_VIARI'], 'EXTERNA'], 1.0, ['==', ['get', 'SIST_VIARI'], 'OUTRAS VIAS'], 1.0, ['==', ['get', 'SIST_VIARI'], 'PRIORITÁRIA'], 1.0, ['==', ['get', 'SIST_VIARI'], 'SETORIAL 1'], 1.0, ['==', ['get', 'SIST_VIARI'], 'SETORIAL 2'], 1.0, 0], 'line-color': ['case', ['==', ['get', 'SIST_VIARI'], 'CENTRAL'], '#ffe201', ['==', ['get', 'SIST_VIARI'], 'COLETORA 1'], '#faee00', ['==', ['get', 'SIST_VIARI'], 'COLETORA 2'], '#ffe201', ['==', ['get', 'SIST_VIARI'], 'EXTERNA'], '#f3ff01', ['==', ['get', 'SIST_VIARI'], 'OUTRAS VIAS'], '#ffef06', ['==', ['get', 'SIST_VIARI'], 'PRIORITÁRIA'], '#fff301', ['==', ['get', 'SIST_VIARI'], 'SETORIAL 1'], '#bfe000', ['==', ['get', 'SIST_VIARI'], 'SETORIAL 2'], '#f9f902', '#ffffff']}
        }
,
        {
            "id": "lyr_Escolamunicipal_7_0",
            "type": "circle",
            "source": "Escolamunicipal_7",
            "layout": {},
            "paint": {'circle-radius': ['/', 3.571428571428571, 2], 'circle-color': '#12f3f6', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#325780'}
        }
,
        {
            "id": "lyr_Hospital_8_0",
            "type": "circle",
            "source": "Hospital_8",
            "layout": {},
            "paint": {'circle-radius': ['/', 3.214285714285714, 2], 'circle-color': '#ffe601', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}