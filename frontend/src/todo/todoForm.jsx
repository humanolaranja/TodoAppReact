import React from 'react';
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default (props) => (
    <div role='form' className='todoForm'>
      <div className='row'>
        <Grid cols='12 10 9 8'>
          <input id='description' className='form-control'
            placeholder='Adicione uma tarefa'></input>
        </Grid>
        <Grid cols='3 2 1 1'>
          <IconButton style='primary' icon='plus' />
        </Grid>
      </div>
    </div>
)
