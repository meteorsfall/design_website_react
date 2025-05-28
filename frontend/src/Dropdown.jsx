import React, { useState } from 'react';
import { Provider, useSelector, useDispatch} from 'react-redux';
import { toggleDropdown, AppDispatch, closeAllDropdowns } from '../store/store.ts';


const Dropdown = ({label, options}) => {
    const dispatch = useDispatch();
    const openDropdowns = useSelector((state) => state.dropdowns);
    const isOpen = openDropdowns.includes(label);
    const [selectedLabel, setSelectedLabel] = useState(label);

    const handleClick = (e) => {
      e.stopPropagation();
      dispatch(toggleDropdown(label));
    }

    return (
      <div
        className="dropdown"
        onClick={handleClick}
        style={{ position: 'relative' }}
      >
      <span
        style={{cursor:'pointer', userSelect: 'none'  }}
      >
        {selectedLabel}
      </span>

      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
          {options.map((option, i) => (
            <div key={i} className="dropdown-line" onClick={() => setSelectedLabel(option)}>{option}</div>
          ))}
        </div>
      </div>
    )
  }

  function ContestStatus({label}) {
    const [active, setActive] = useState(false);

    return (
      <div className={`turn-dark ${active ? 'active' : ''}`} onClick={() => setActive(!active)}> {label} </div>
    )
  }

  function Icon2({position}) {
    const [active, setActive] = useState(false);

    return (
      <div
        className={`icon2 ${active ? 'active' : ''}`}
        onClick={() => setActive(!active)}
        style={{ backgroundPosition: {position} }}></div>
    )
  }

export {Dropdown, ContestStatus, Icon2};
