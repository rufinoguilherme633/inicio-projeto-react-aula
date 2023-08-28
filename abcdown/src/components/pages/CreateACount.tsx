import React, { useState } from "react";
import Btn from '../layout/FormComponents/Btn';
import HeaderLogin from '../layout/FormComponents/HeaderLogin';
import RegistrationInstructions from '../layout/FormComponents/RegistrationInstructions';
import Input from '../layout/FormComponents/Input';

interface UserDataSectionProps {
    proceedToSchoolData: () => void;
}

function UserDataSection({ proceedToSchoolData }: UserDataSectionProps) {
    const heightInput: string = '4vh';
    const heightButton: string = '6.5vh';
    const widthInputleft: string = '27vw';
    const widthInputfullAddress: string = '15vw';
    const widthInputright: string = '15vw';
    const userProfile: string = '23vw';

    const widthBtnRigth: string = '15vw';
    const widthBtnLeft: string = '30vw';

    const [nome, setNome] = useState("");
    const [sexo, setSexo] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [bairro, setBairro] = useState("");
    const [estado, setEstado] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");

    const clearInputs = () => {
        setNome(""); // Limpa o conteúdo do input nome
        // Limpar outros estados, se necessário
        setSexo("");
        setCpf("");
        setDataNascimento("");
        setCep("");
        setEndereco("");
        setBairro("");
        setEstado("");
        setLogradouro("");
        setNumero("");
    };
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: "100%",
                backgroundColor: 'white'
            }}
        >
            <HeaderLogin />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5vh',
                    width: "max-content",
                    // alignItems: 'center',
                    // justifyContent:'center'
                }}
            >

                <div

                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: "100%",
                        // backgroundColor: 'black'
                    }}
                >

                    <RegistrationInstructions
                        textTitulo="Crie uma conta agora!"
                        textDescription="Precisamos de algumas informações sobre você, para que você possa acessar nossa plataforma"
                    />

ß   
                </div>


                <span style={{
                        fontWeight: 'bold',
                        fontSize: '1vw',
                        marginTop:'5%',
                        marginBottom:'1%'
                    }}>
                        Parte 1
                    </span>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: "100%",
                        // backgroundColor: 'red'
                    }}
                >
                    <Input
                        text="nome"
                        width={widthInputleft}
                        height={heightInput}
                        value={nome} // Fornecer o valor do estado
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <Input
                        text="sexo"
                        width={widthInputright}
                        height={heightInput}
                        value={sexo} // Fornecer o valor do estado
                        onChange={(e) => setSexo(e.target.value)}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: "100%",
                        // backgroundColor: 'red'
                    }}
                >
                    <Input
                        text="cpf"
                        width={userProfile}
                        height={heightInput}
                        value={cpf} // Fornecer o valor do estado
                        onChange={(e) => setCpf(e.target.value)}

                    />

                    <Input
                        text="data nascimento"
                        width={userProfile}
                        height={heightInput}
                        value={dataNascimento} // Fornecer o valor do estado
                        onChange={(e) => setDataNascimento(e.target.value)}
                    />
                </div>

                <Input
                    text="CEP"
                    width={widthBtnRigth}
                    height={heightInput}
                    value={cep} // Fornecer o valor do estado
                    onChange={(e) => setCep(e.target.value)}

                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: "100%",
                        // backgroundColor: 'red'
                    }}
                >
                    <Input
                        text="Endereco"
                        width={widthInputleft}
                        height={heightInput}
                        value={endereco} // Fornecer o valor do estado
                        onChange={(e) => setEndereco(e.target.value)}
                    />

                    <Input
                        text="Bairro"
                        width={widthInputright}
                        height={heightInput}
                        value={bairro} // Fornecer o valor do estado
                        onChange={(e) => setBairro(e.target.value)}
                    />

                </div>


                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: "100%",
                        // backgroundColor: 'pink',
                        paddingBottom: '10%'

                    }}
                >
                    <Input
                        text="Estado"
                        width={widthInputfullAddress}
                        height={heightInput}
                        value={estado} // Fornecer o valor do estado
                        onChange={(e) => setEstado(e.target.value)}
                    />

                    <Input
                        text="Logradouro"
                        width={widthInputfullAddress}
                        height={heightInput}
                        value={logradouro} // Fornecer o valor do estado
                        onChange={(e) => setLogradouro(e.target.value)}

                    />
                    <Input
                        text="Numero"
                        width={widthInputfullAddress}
                        height={heightInput}
                        value={numero} // Fornecer o valor do estado
                        onChange={(e) => setNumero(e.target.value)}
                    />

                </div>
                <div style={{
                    display: 'flex',
                    // backgroundColor: 'black',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    width: "100%",

                }}>
                    <Btn text="Limpar" color="#F0754E" width={widthBtnRigth} onClick={clearInputs} />
                    <Btn onClick={proceedToSchoolData} text="Avança para schoolData" color="#43B1B1" width={widthBtnLeft} />


                </div>
            </div>


        </div>
    );
}

interface SchoolDataSectionProps {
    proceedToLoginData: () => void;
}

function SchoolDataSection({ proceedToLoginData }: SchoolDataSectionProps) {
    const heightInput: string = '5vh';
    const heightButton: string = '6.5vh';
    const widthInput: string = '35vw';
    return (
        <div>
            <RegistrationInstructions
                textTitulo="Crie uma conta agora!"
                textDescription="Por favor, agora preencha com os dados da instituição onde você leciona para continuar"
            />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: "100%",
                    backgroundColor: 'red'
                }}
            >
                <Input
                    text="Nome da instituição"
                    width={widthInput}
                    height={heightInput}
                />
                <Input
                    text="E-mail*"
                    width={widthInput}
                    height={heightInput}
                />
            </div>


            <Input
                text="CEP"
                width={widthInput}
                height={heightInput}

            />

            <Btn onClick={proceedToLoginData} text="Avança para loginData" color="#43B1B1" />
        </div>
    );
}

function LoginDataSection() {
    return (
        <div>
            <HeaderLogin />
            <RegistrationInstructions
                textTitulo="Crie uma conta agora!"
                textDescription="Estamos quase lá!
        Preencha o restante das suas informações para finalizarmos"
            />
        </div>
    );
}

function CreateACount() {
    const [createCoute, setCreateCoute] = useState('userData');

    const proceedToSchoolData = () => {
        setCreateCoute('schoolData');
    }

    const proceedToLoginData = () => {
        setCreateCoute('loginData');
    }

    return (
        <>
            {createCoute === "userData" ? (
                <UserDataSection proceedToSchoolData={proceedToSchoolData} />
            ) : createCoute === "schoolData" ? (
                <SchoolDataSection proceedToLoginData={proceedToLoginData} />
            ) : (
                <LoginDataSection />
            )}
        </>
    );
}

export default CreateACount;
