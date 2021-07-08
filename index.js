"use strict";
(function(){
    
let pacientesRadiologias = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

let pacientesTraumatologias = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE'},
];

let pacientesDentals = [
    {hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE'},
];

    document.write(`Primera atención: ${pacientesRadiologias[0].paciente} - ${pacientesRadiologias[0].prevision}`);
    document.write('<br/>')
    document.write(`Última atención: ${pacientesRadiologias[4].paciente} - ${pacientesRadiologias[4].prevision}`);
    document.write('<br/>')
    document.write('<br/>')
    document.write(`Primera atención: ${pacientesTraumatologias[0].paciente} - ${pacientesTraumatologias[0].prevision}`);
    document.write('<br/>')
    document.write(`Última atención: ${pacientesTraumatologias[6].paciente} - ${pacientesTraumatologias[6].prevision}`);
    document.write('<br/>')
    document.write('<br/>')
    document.write(`Primera atención: ${pacientesDentals[0].paciente} - ${pacientesDentals[0].prevision}`);
    document.write('<br/>')
    document.write(`Última atención: ${pacientesDentals[5].paciente} - ${pacientesDentals[5].prevision}`);


var texto = `
<tr>
    <th>Hora</th>
    <th>Especialista</th>
    <th>Paciente</th>
    <th>Rut</th>
    <th>Previsión</th>
</tr>
`

for(var i =0; i< pacientesRadiologias.length ; i++ ){
    texto += `
    <tr>
        <td>${pacientesRadiologias[i].hora}</td>
        <td>${pacientesRadiologias[i].especialista}</td>
        <td>${pacientesRadiologias[i].paciente}</td>
        <td>${pacientesRadiologias[i].rut}</td>
        <td>${pacientesRadiologias[i].prevision}</td>
    </tr>
    `
}

for(var i =0; i< pacientesTraumatologias.length ; i++ ){
    texto += `
    <tr>
        <td>${pacientesTraumatologias[i].hora}</td>
        <td>${pacientesTraumatologias[i].especialista}</td>
        <td>${pacientesTraumatologias[i].paciente}</td>
        <td>${pacientesTraumatologias[i].rut}</td>
        <td>${pacientesTraumatologias[i].prevision}</td>
    </tr>
    `
}

for(var i =0; i< pacientesDentals.length ; i++ ){
    texto += `
    <tr>
        <td>${pacientesDentals[i].hora}</td>
        <td>${pacientesDentals[i].especialista}</td>
        <td>${pacientesDentals[i].paciente}</td>
        <td>${pacientesDentals[i].rut}</td>
        <td>${pacientesDentals[i].prevision}</td>
    </tr>
    `
}

document.getElementById("cuerpo-tabla").innerHTML = texto

}

)()