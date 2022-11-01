import { useRef, useState } from 'react';

import { TbEdit } from 'react-icons/tb'

import styles from '../styles.module.scss'

const inputs = [
    {
      id: "Gestação/Infância/Adolescência",
      label: "Gestação/Infância/Adolescência",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit egestas. Ut placerat orci nulla pellentesque dignissim enim sit. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Quam vulputate dignissim suspendisse in est ante in. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Nulla aliquet enim tortor at auctor urna. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Faucibus a pellentesque sit amet porttitor eget. Risus nullam eget felis eget nunc lobortis. In ante metus dictum at. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Vitae purus faucibus ornare suspendisse sed. Ipsum a arcu cursus vitae congue mauris. Pellentesque id nibh tortor id aliquet lectus proin nibh. Netus et malesuada fames ac. At in tellus integer feugiat scelerisque varius morbi. Vivamus arcu felis bibendum ut tristique et. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Facilisis mauris sit amet massa vitae. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Odio euismod lacinia at quis risus sed vulputate odio. In metus vulputate eu scelerisque felis. Semper feugiat nibh sed pulvinar proin. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. ",
    },
    {
      id: "Hobbies/Intesses/Habilidades",
      label: "Hobbies/Intesses/Habilidades",
      value: "",
    },
]

export default function HistyryContentTab () {

    const [isDisabled, setDisabled] = useState(true)
    const [visible, setVisible] = useState<string[]>(inputs.map(input => input.value));
    const inputEls = useRef(new Array());

    const onButtonClick = () => {
        setDisabled(false)
  
        const inputs = inputEls.current
        inputs.forEach((inputEl => {
          inputEl ? inputEl.disabled = false : null
        }))   
      };

      const onSaveInp = () => {
        setDisabled(true)
  
        const inputs = inputEls.current
        inputs.forEach((inputEl => {
          inputEl ? inputEl.disabled = true : null
        }))  
      };

      const changeInput = (str: string, i: number) => {
        setVisible(prevState => {
           const clone = [...prevState]; 
           clone.splice(prevState.indexOf(prevState[i]), 1, str)
           return clone;
        })
    };

    return (
        <div className={styles.tabContent}>
            <h3  className={styles.title}>
            História Pessoal
                <button className={styles.edit}
                style={ isDisabled ? {"display" : "block"} : {"display" : "none"} }
                onClick={onButtonClick}>
                    <TbEdit size={"25px"} stroke={"#E7975D"}/>
                </button>
                <button className={styles.save}
                style={ !isDisabled ? {"display" : "block"} : {"display" : "none"} }
                onClick={onSaveInp}>
                    Salvar
                </button>
            </h3>
            <div className={styles.items_block}>
            {inputs.map((input, i) => {
                return (
                <div className={styles.TextWrapper} key={i}>
                        <label className={styles.Label} htmlFor={input.id}>
                        {input.label}
                        </label>
                        <textarea className={styles.Textarea} 
                         id={input.id} 
                        value={visible[i]}
                        ref={(input) => inputEls.current.push(input)}
                        onChange={(e) => changeInput(e.target.value, i)}
                        disabled/>
                    </div>
                )
                })
                }
            </div>
        </div>
    )
}