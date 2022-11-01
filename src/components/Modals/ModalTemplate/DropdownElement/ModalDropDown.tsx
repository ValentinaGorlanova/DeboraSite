import Dropdown from 'react-dropdown';

import styles from './styles.module.scss';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface DropDownProps {
    label?: boolean;
    select: {
        id: string;
        name: string;
        options: Array<string>;
    }
    i: number | string;
    paddingSides?: string;
}

export const DropDown = ({label = true, select, i, paddingSides }: DropDownProps) => {

    return (
      <div className={styles.SelectWrapper} key={i} style={{ "padding": paddingSides }}> 
       {label ? <div className={styles.Label}>{select.name}</div> : null}
       <Dropdown 
          className={styles.Select} 
          controlClassName={styles.control}
          options={select.options} 
          placeholder={select.name} 
          placeholderClassName={styles.defaultValue}
          menuClassName={styles.menu}
          arrowClosed={ <FaChevronDown size={'15px'}/> } 
          arrowOpen={ <FaChevronUp size={'15px'}/> }
          /> 
      </div>
    )
  }