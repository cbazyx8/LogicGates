const logicGates = {
    AND: {
        description: "It gives a true output (1) only if all its inputs are true (1).",
        truthTable: [
            ['A', 'B', 'Output'],
            [0, 0, 0],
            [0, 1, 0],
            [1, 0, 0],
            [1, 1, 1]
        ]
    },
    OR: {
        description: "It gives a true output (1) if at least one of its inputs is true (1).",
        truthTable: [
            ['A', 'B', 'Output'],
            [0, 0, 0],
            [0, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ]
    },
    NOT: {
        description: "It gives a true output (1) if the input is false (0).",
        truthTable: [
            ['A', 'Output'],
            [0, 1],
            [1, 0]
        ]
    },
    NAND: {
        description: "The NAND gate is a digital logic gate that gives a true output (1) if at least one of its inputs is false (0). It is the complement of the AND gate.",
        truthTable: [
            ['A', 'B', 'Output'],
            [0, 0, 1],
            [0, 1, 1],
            [1, 0, 1],
            [1, 1, 0]
        ]
    },
    NOR: {
        description: "The NOR gate is a digital logic gate that gives a true output (1) only if all its inputs are false (0). It is the complement of the OR gate.",
        truthTable: [
            ['A', 'B', 'Output'],
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 0],
            [1, 1, 0]
        ]
    },
    XOR: {
        description: "The XOR gate (exclusive OR gate) is a digital logic gate that gives a true output (1) if an odd number of its inputs are true (1).",
        truthTable: [
            ['A', 'B', 'Output'],
            [0, 0, 0],
            [0, 1, 1],
            [1, 0, 1],
            [1, 1, 0]
        ]
    },
    XNOR: {
        description: "The XNOR gate (exclusive NOR gate) is a digital logic gate that gives a true output (1) if an even number of its inputs are true (1).",
        truthTable: [
            ['A', 'B', 'Output'],
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 0],
            [1, 1, 1]
        ]
    }
};

function showDetails() {
    const gateName = document.getElementById('gateName').value.toUpperCase();
    const detailsDiv = document.getElementById('details');
    if (logicGates[gateName]) {
        const gate = logicGates[gateName];
        detailsDiv.innerHTML = `
            <h2>${gateName} Gate</h2>
            <p>${gate.description}</p>
            ${generateTruthTable(gate.truthTable)}
        `;
    } else {
        detailsDiv.innerHTML = `<p>Logic gate not found. Please enter a valid logic gate name.</p>`;
    }
}

function generateTruthTable(tableData) {
    let tableHTML = '<div class="table-container"><table>';
    tableData.forEach(row => {
        tableHTML += '<tr>';
        row.forEach(cell => {
            tableHTML += `<td>${cell}</td>`;
        });
        tableHTML += '</tr>';
    });
    tableHTML += '</table></div>';
    return tableHTML;
}
