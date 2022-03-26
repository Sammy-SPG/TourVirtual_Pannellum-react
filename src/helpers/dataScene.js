import images from '../hooks/images';

const [defaulScene_image, cosmonautica_image, marteInicio_image] = images;

const Scenes = {
    defaultScene: {
        title: 'Entrada al planetario :)',
        image: defaulScene_image,
        pitch: 2,
        yaw: -7,
        hfov: 110,
        hotspot: {
            SaturnoV: {
                pitch: 1,
                yaw: -6,
                cssClass: 'hotspot_info',
                hotSpotObj: 'SaturnoV',
            },
            transbordador:{
                pitch: -12,
                yaw: 76,
                cssClass: 'hotspot_info',
                hotSpotObj: 'transbordador',
            },
            Curiosity:{
                pitch: -12,
                yaw: 51,
                cssClass: 'hotspot_info',
                hotSpotObj: 'Curiosity',
            },
            FalconHeavy:{
                pitch: -12,
                yaw: 34,
                cssClass: 'hotspot_info',
                hotSpotObj: 'FalconHeavy',
            },
            EstacionEspacial:{
                pitch: -12,
                yaw: 18,
                cssClass: 'hotspot_info',
                hotSpotObj: 'EstacionEspacial',
            },
            nextTour: {
                pitch: -18,
                yaw: 7,
                cssClass: 'nextTour',
            },
        },
    },
    cosmonautica: {
        title: 'Cohete saturnoV',
        image: cosmonautica_image,
        pitch: 4,
        yaw: -5,
        hfov: 120,
        hotspot: {
            SaturnoV: {
                pitch: 4,
                yaw: -5,
                cssClass: 'hotspot_info',
                hotSpotObj: 'SaturnoV',
            },
            Astronautas:{
                pitch: -11,
                yaw: 13,
                cssClass: 'hotspot_info',
                hotSpotObj: 'Astronautas',
            },
            nextTour: {
                pitch: -17,
                yaw: 65,
                cssClass: 'nextTour',
            },
        },
    },
    Mars: {
        title: 'Pasillo a la sala de Mars',
        image: marteInicio_image,
        pitch: 4,
        yaw: -5,
        hfov: 120,
        hotspot: {
            Mars: {
                pitch: 4,
                yaw: -5,
                cssClass: 'hotspot_info',
                hotSpotObj: 'Mars',
            },
            nextTour: {
                pitch: 20,
                yaw: 100,
                cssClass: 'nextTour',
            }
        },
    }
};

export default Scenes;