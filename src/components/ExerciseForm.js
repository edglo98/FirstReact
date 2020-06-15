import React from 'react'

class ExerciseForm extends React.Component{

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render(){
        const {onChange, form}=this.props
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} >
                    <div className='form-group'>
                        <input
                            type='email'
                            className='form-control'
                            placeholder='tittle'
                            name='tittle'
                            onChange={onChange}
                            value={form.tittle}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='description'
                            name='description'
                            onChange={onChange}
                            value={form.description}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='img'
                            name='img'
                            onChange={onChange}
                            value={form.img}
                        />
                    </div>
                    <div className='form-row'>
                        <div className='col'>
                            <input
                            type='text'
                            className='form-control'
                            placeholder='leftColor'
                            name='leftcolor'
                            onChange={onChange}
                            value={form.leftcolor}
                            />
                        </div>
                        <div className='col'>
                            <input
                            type='text'
                            className='form-control'
                            placeholder='RightColor'
                            name='rightcolor'
                            onChange={onChange}
                            value={form.rightcolor}
                            />
                        </div>
                    </div>
                    <button
                        type='submit'
                        className='btn btn-primary'
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default ExerciseForm