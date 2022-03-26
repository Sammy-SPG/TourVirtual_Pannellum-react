import React, { useState, useEffect } from 'react';
import { Pannellum } from 'pannellum-react';
import Modal from '../components/panel';
import { UseModal } from '../hooks/useModal';
import dataInfo from '../helpers/dataInfo';
import '../styles/scene.css';
import '../styles/hotspotsScene.css';

let contador = 0;

const Scene = (props) => {
    let positionScene = ['defaultScene', 'cosmonautica', 'Mars'];
    const { isOpen, openModal, closeModal } = UseModal(false);
    const [scene, setScene] = useState(props.scene[positionScene[contador]]);
    const [elementInfo, setElementInfo] = useState(null);

    useEffect(() => {
        console.log(scene);
        console.log(scene.hotspot);
    }, [scene]);

    const getElementInfo = () => {
        if(elementInfo === null){
            return;
        }else{
            return (
                <>
                    <h1>{elementInfo.title}</h1>
                    <hr />
                    <p>{elementInfo.textContent}</p>
                </>
            );
        }
    }

    const nextScene = () => {
        contador++;
        setScene(props.scene[positionScene[contador]]);
    }

    const hotSpotsScene = (element, i) => {
        if (element.cssClass === 'nextTour')
            return (
                <Pannellum.Hotspot
                    key={i}
                    type="custom"
                    pitch={element.pitch}
                    yaw={element.yaw}
                    handleClick={()=>{nextScene()}}
                    cssClass={element.cssClass}
                />
            );
        if (element.cssClass === 'hotspot_info')
            return (
                <Pannellum.Hotspot
                    key={i}
                    type="custom"
                    pitch={element.pitch}
                    yaw={element.yaw}
                    handleClick={()=>{viewElementInfo(element.hotSpotObj)}}
                    cssClass={element.cssClass}
                />
            );
    }

    const viewElementInfo = (element)=>{
        openModal();
        setElementInfo(dataInfo[positionScene[contador]][element]);
    }

    return (
        <>
            <Pannellum
                width={'100%'}
                height={'100vh'}
                title={scene.title}
                image={scene.image}
                pitch={scene.pitch}
                yaw={scene.yaw}
                hfov={scene.hfov}
                autoLoad
                showControls={false}
                showFullscreenCtrl={false}
                showZoomCtrl={false}
                hotspotDebug={true} //Para el desarrollador
            >
                {Object.values(scene.hotspot).map((element, i) => (
                    hotSpotsScene(element, i)
                ))}
            </Pannellum>

            <Modal isOpen={isOpen} closeModal={closeModal} >
                {getElementInfo()}
            </Modal>
        </>
    );
}

export default Scene;