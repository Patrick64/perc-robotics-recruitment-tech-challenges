import { createContext, useState } from 'react';


export const EmployeeFilterContext = createContext({
    departmentId: null,
    fullName: ''
});

export const EmployeeFilterProvider = ({ children }) => {
  const [employeeFilter, setEmployeeFilter] = useState({
    departmentId: null,
    fullName: ''
  });


  const value = { employeeFilter, setEmployeeFilter };
  return (
    <EmployeeFilterContext.Provider value={value}>
      {children}
    </EmployeeFilterContext.Provider>
  );
};
