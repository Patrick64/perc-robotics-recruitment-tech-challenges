import { createContext, useState } from 'react';


export const EmployeeFilterContext = createContext({
  departmentId: null,
});

export const EmployeeFilterProvider = ({ children }) => {
  const [employeeFilter, setEmployeeFilter] = useState({});


  const value = { employeeFilter, setEmployeeFilter };
  return (
    <EmployeeFilterContext.Provider value={value}>
      {children}
    </EmployeeFilterContext.Provider>
  );
};
