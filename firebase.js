import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyARRi1trJc6QyxwMsaQChw79OAIzGpDoZU",
    authDomain: "teste-c531e.firebaseapp.com",
    projectId: "teste-c531e",
    storageBucket: "teste-c531e.appspot.com",
    messagingSenderId: "160162939953",
    appId: "1:160162939953:web:142a73a4a7c34d82c54110"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function enviarDados(colecao, dados) {
    try {
        await addDoc(collection(db, colecao), dados);
        alert("Dados enviados com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar seus dados: ", error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const formAluno = document.getElementById('form-aluno');
    const formFuncionario = document.getElementById('form-funcionario');

    if (formAluno) {
        formAluno.addEventListener('submit', function(event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const cpf = document.getElementById('cpf').value;
            const idade = document.getElementById('idade').value;
            const planos = document.getElementById('planos').value;

            const dadosAluno = {
                nome: nome,
                email: email,
                telefone: telefone,
                cpf: cpf,
                idade: idade,
                planos: planos,
                dataCadastro: serverTimestamp()
            };

            enviarDados("alunos", dadosAluno);
        });
    } else {
        console.error("Elemento com ID 'form-aluno' não encontrado.");
    }

    if (formFuncionario) {
        formFuncionario.addEventListener('submit', function(event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const cpf = document.getElementById('cpf').value;
            const cod = document.getElementById('cod').value;

            const dadosFuncionario = {
                nome: nome,
                email: email,
                telefone: telefone,
                cpf: cpf,
                cod: cod
            };

            enviarDados("funcionarios", dadosFuncionario);
        });
    } else {
        console.error("Elemento com ID 'form-funcionario' não encontrado.");
    }
});

