import React,{useRef} from 'react'
import '../componets/update.css';
import { SignalCellularAlt, SignalWifi4Bar, Battery30, ArrowBack } from '@mui/icons-material';
import { Navbar, Container } from 'react-bootstrap';
function UpdataNote() {

    const data = useRef();
    const handleSubmit = () => {
        localStorage.setItem('value',data.current.value);
        console.log(localStorage.getItem('value'))
    }
    // console.log(localStorage.getItem('value'))

    return (
        <>
            <div className='main'>
                <div className='content'>
                    <div className='row'>
                        <div className='col-md-10'>
                            <p>1:16</p>
                        </div>
                        <div className='col-md-2'>
                            <div className='icon'>
                                <span><SignalCellularAlt /></span>
                                <span><SignalWifi4Bar /></span>
                                <span><Battery30 /></span>
                            </div>
                        </div>
                    </div>
                    <Navbar style={{ padding: '12px 12px 0px 12px' }}>
                        <Container>
                            <ArrowBack />
                            <p>Updata Notes</p>
                        </Container>
                    </Navbar>
                    <div className='main-content'>
                        <div className='inputField'>
                            <input placeholder='Add Note' ref={data} />
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='head'>
                                    <p>Box1</p>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='head'>
                                    <p>Box2</p>
                                </div>
                            </div>
                            <div className='btn-box'>
                                <button className='btn btn-note text-center' onClick={handleSubmit}>Add Note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdataNote