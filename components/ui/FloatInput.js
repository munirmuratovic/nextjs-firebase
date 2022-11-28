import styled from "styled-components";

const Wrapper = styled.div`
`;

const Label = styled.label`
    pointer-events: none;
`;

const Input = styled.input`
`;

const FloatInput = (props) => {

    return (
        <Wrapper className="relative">
            <Input
                id={props.id}
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                hasError={props.hasError}
                autoComplete={props.autoComplete}
                autoFocus={props.autoFocus}
                className="block rounded bg-white dark:bg-gray-800 px-2.5 pb-2.5 pt-5 w-full text-gray-900 border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <Label
                htmlFor={props.id}
                className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                {props.label}
            </Label>
            {props.hasError && (
                <div className="absolute top-1/2 right-2 text-2xl -translate-y-1/2 text-lg text-red-400 text-red-600">
                    <i className="bi bi-x-circle-fill "></i>
                </div>
            )}
        </Wrapper>
    )
}

export default FloatInput;
