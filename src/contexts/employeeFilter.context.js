import { createContext, useState } from 'react';


export const EmployeeFilterContext = createContext({
    departmentId: '',
    fullName: ''
});

export const EmployeeFilterProvider = ({ children }) => {
  const [employeeFilter, setEmployeeFilter] = useState({
    departmentId: '',
    fullName: ''
  });


  const value = { employeeFilter, setEmployeeFilter };
  return (
    <EmployeeFilterContext.Provider value={value}>
      {children}
    </EmployeeFilterContext.Provider>
  );
};
