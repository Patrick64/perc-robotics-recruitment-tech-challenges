import React, { useContext } from 'react'
import {  makeStyles } from '@material-ui/core';
import { getDepartmentCollection} from '../services/employeeService'
import Controls from './controls/Controls';
import { EmployeeFilterContext } from '../contexts/employeeFilter.context';

const useStyles = makeStyles({
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '100%',
    backgroundColor: '#253053'
  },
});

export default function SideMenu() {

  const classes = useStyles()
  
  const { employeeFilter, setEmployeeFilter } = useContext(EmployeeFilterContext);

  const handleInputChange = ({ target }) => {
    setEmployeeFilter({ ...employeeFilter, [target.name]: target.value });
  }

    return (
      <div className={classes.sideMenu}>
        <div style={{ margin: '10px', background: '#fff', padding: '10px', borderRadius: '0.5em', display: 'flex', 'flexDirection': 'column' }}>
            <Controls.Select
            name='departmentId'
            label='Filter by Department'
            value={employeeFilter.departmentId}
            onChange={handleInputChange}
            options={getDepartmentCollection()}
            
            />
            </div>
        </div>
    )
}
