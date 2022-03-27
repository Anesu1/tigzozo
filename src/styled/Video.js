import React, {useState} from 'react';
import styled from 'styled-components';
import 'react-modal-video/css/modal-video.css';
import ModalVideo from 'react-modal-video'

const Wrapper = styled.div`
    height:400px;
    width:400px;
    background:yellow;
    margin-bottom:30px;
`

function Video({videoId, bgImage}) {
     const [isOpen, setOpen] = useState(false)
  return (
    <Wrapper bgImage={bgImage}>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />

      <button className="btn-primary" onClick={()=> setOpen(true)}>Watch Project</button>
      </Wrapper>
  )
}

export default Video