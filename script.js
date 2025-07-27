document.addEventListener('DOMContentLoaded', () => {

    // --- ESTRUCTURA DE DATOS DE LA MALLA ---
    // Cada ramo tiene un 'id' único, su nombre y un array con los 'id' de sus requisitos.
    const mallaData = [
        // Semestre 1
        {
            semestre: 1,
            ramos: [
                { id: 'intro-conta', nombre: 'Introducción a la contabilidad', creditos: 5, requisitos: [] },
                { id: 'norm-emp-1', nombre: 'Normativa empresarial 1', creditos: 4, requisitos: [] },
                { id: 'gest-org-1', nombre: 'Gestión de organizaciones 1', creditos: 4, requisitos: [] },
                { id: 'leng-mater', nombre: 'Lengua materna y autorregulación', creditos: 3, requisitos: [] },
                { id: 'mat-1', nombre: 'Matemáticas 1', creditos: 5, requisitos: [] },
            ]
        },
        // Semestre 2
        {
            semestre: 2,
            ramos: [
                { id: 'conta-finan', nombre: 'Contabilidad financiera', creditos: 5, requisitos: ['intro-conta'] },
                { id: 'norm-emp-2', nombre: 'Normativa empresarial 2', creditos: 4, requisitos: ['norm-emp-1'] },
                { id: 'gest-org-2', nombre: 'Gestión de organizaciones 2', creditos: 4, requisitos: ['gest-org-1'] },
                { id: 'intro-audit', nombre: 'Introducción a la auditoría', creditos: 4, requisitos: [] },
                { id: 'econ-1', nombre: 'Economía 1', creditos: 5, requisitos: ['mat-1'] },
                { id: 'mat-2', nombre: 'Matemáticas 2', creditos: 5, requisitos: ['mat-1'] },
            ]
        },
        // Semestre 3
        {
            semestre: 3,
            ramos: [
                { id: 'norm-ifrs', nombre: 'Normativa contable IFRS', creditos: 5, requisitos: ['conta-finan'] },
                { id: 'norm-trib', nombre: 'Normativa tributaria', creditos: 4, requisitos: ['norm-emp-2'] },
                { id: 'tic-neg', nombre: 'TIC para los negocios', creditos: 4, requisitos: [] },
                { id: 'econ-2', nombre: 'Economía 2', creditos: 5, requisitos: ['econ-1'] },
                { id: 'estadistica', nombre: 'Estadística', creditos: 5, requisitos: ['mat-2'] },
                { id: 'ctrl-int', nombre: 'Control interno y gestión de riesgos', creditos: 4, requisitos: ['intro-audit'] },
            ]
        },
        // Semestre 4
        {
            semestre: 4,
            ramos: [
                { id: 'fund-audit', nombre: 'Fundamentos de auditoria', creditos: 4, requisitos: ['ctrl-int'] },
                { id: 'norm-nicsp', nombre: 'Normativa contable NIC SP', creditos: 5, requisitos: ['norm-ifrs'] },
                { id: 'imp-1', nombre: 'Impuestos 1', creditos: 4, requisitos: ['norm-trib'] },
                { id: 'costos-1', nombre: 'Costos para la toma de decisiones 1', creditos: 5, requisitos: ['econ-1'] },
                { id: 'estad-neg', nombre: 'Estadística para los negocios', creditos: 5, requisitos: ['estadistica'] },
                { id: 'ingles-1', nombre: 'Inglés 1', creditos: 3, requisitos: [] },
            ]
        },
        // Semestre 5
        {
            semestre: 5,
            ramos: [
                { id: 'cien-datos', nombre: 'Bases y aplicacion de ciencias de datos', creditos: 5, requisitos: ['estad-neg'] },
                { id: 'trib-ap-1', nombre: 'Tributación aplicada 1', creditos: 4, requisitos: ['imp-1'] },
                { id: 'gest-cap-hum', nombre: 'Gestión de capital humano', creditos: 4, requisitos: ['gest-org-2'] },
                { id: 'costos-2', nombre: 'Costos para la toma de decisiones 2', creditos: 5, requisitos: ['estad-neg'] },
                { id: 'ingles-2', nombre: 'Inglés 2', creditos: 3, requisitos: ['ingles-1'] },
                { id: 'taller-uv-1', nombre: 'Taller integracion perfil uv 1', creditos: 6, requisitos: ['norm-ifrs', 'norm-trib', 'tic-neg', 'econ-2', 'estadistica', 'fund-audit'] },
            ]
        },
        // Semestre 6
        {
            semestre: 6,
            ramos: [
                { id: 'conta-av-1', nombre: 'Contabilidad avanzada 1', creditos: 5, requisitos: ['norm-ifrs'] },
                { id: 'imp-2', nombre: 'Impuestos 2', creditos: 4, requisitos: ['trib-ap-1'] },
                { id: 'gest-comer', nombre: 'Gestión comercial', creditos: 4, requisitos: ['gest-org-2'] },
                { id: 'intro-finan', nombre: 'Introducción a las finanzas', creditos: 5, requisitos: ['costos-2'] },
                { id: 'ingles-3', nombre: 'Ingles 3', creditos: 3, requisitos: ['ingles-2'] },
                { id: 'taller-uv-2', nombre: 'Taller integracion perfil uv 2', creditos: 6, requisitos: ['taller-uv-1'] },
                { id: 'ejec-proy-audit', nombre: 'Ejecución de proyectos de auditoría', creditos: 4, requisitos: ['cien-datos', 'ctrl-int'] },
            ]
        },
        // Semestre 7
        {
            semestre: 7,
            ramos: [
                { id: 'conta-av-2', nombre: 'Contabilidad avanzada 2', creditos: 5, requisitos: ['conta-av-1'] },
                { id: 'trib-ap-2', nombre: 'Tributación aplicada 2', creditos: 4, requisitos: ['imp-2'] },
                { id: 'gest-op', nombre: 'Gestión de operaciones', creditos: 4, requisitos: ['gest-comer', 'costos-2'] },
                { id: 'audit-sist', nombre: 'Auditoria de sistemas', creditos: 4, requisitos: ['ctrl-int'] },
                { id: 'finan-corp', nombre: 'Finanzas corporativas', creditos: 5, requisitos: ['intro-finan'] },
                { id: 'ingles-4', nombre: 'Inglés 4', creditos: 3, requisitos: ['ingles-3'] },
                { id: 'proy-invest', nombre: 'Proyecto de investigación', creditos: 4, requisitos: ['imp-2', 'intro-finan'] },
                { id: 'pract-temp', nombre: 'Práctica temprana', creditos: 3, requisitos: ['ctrl-int', 'norm-nicsp', 'imp-1', 'costos-1'] },
            ]
        },
        // Semestre 8
        {
            semestre: 8,
            ramos: [
                { id: 'conta-av-3', nombre: 'Contabilidad avanzada 3', creditos: 5, requisitos: ['conta-av-2'] },
                { id: 'gest-trib', nombre: 'Gestión tributaria', creditos: 4, requisitos: ['trib-ap-2'] },
                { id: 'plan-ctrl-gest', nombre: 'Planificación y control de gestión', creditos: 4, requisitos: ['gest-op'] },
                { id: 'audit-ef', nombre: 'Auditoría de estados financieros', creditos: 5, requisitos: ['conta-av-2'] },
                { id: 'gest-finan', nombre: 'Gestión financiera', creditos: 5, requisitos: ['intro-finan'] },
                { id: 'invest-apli', nombre: 'Investigación aplicada', creditos: 4, requisitos: ['proy-invest'] },
            ]
        },
        // Semestre 9
        {
            semestre: 9,
            ramos: [
                { id: 'elec-1', nombre: 'Electivo 1 profesional', creditos: 4, requisitos: ['conta-av-2', 'trib-ap-2', 'gest-op', 'audit-sist', 'finan-corp', 'ingles-4', 'proy-invest', 'pract-temp'] },
                { id: 'elec-2', nombre: 'Electivo 2 profesional', creditos: 4, requisitos: ['conta-av-2', 'trib-ap-2', 'gest-op', 'audit-sist', 'finan-corp', 'ingles-4', 'proy-invest', 'pract-temp'] },
                { id: 'elec-3', nombre: 'Electivo 3 profesional', creditos: 4, requisitos: ['conta-av-2', 'trib-ap-2', 'gest-op', 'audit-sist', 'finan-corp', 'ingles-4', 'proy-invest', 'pract-temp'] },
                { id: 'form-proy', nombre: 'Formulacion y evaluacion de proyectos de inversión', creditos: 5, requisitos: ['finan-corp'] },
                { id: 'dir-gral', nombre: 'Dirección general', creditos: 4, requisitos: ['conta-av-2', 'trib-ap-2', 'gest-op', 'audit-sist', 'finan-corp', 'ingles-4', 'proy-invest', 'pract-temp'] },
                { id: 'pract-prof', nombre: 'Práctica profesional', creditos: 10, requisitos: ['conta-av-2', 'trib-ap-2', 'audit-ef', 'pract-temp'] },
            ]
        },
        // Semestre 10
        {
            semestre: 10,
            ramos: [
                { id: 'taller-integ', nombre: 'Taller de integración profesional', creditos: 12, requisitos: ['conta-av-3', 'gest-trib', 'plan-ctrl-gest', 'audit-ef', 'gest-finan', 'invest-apli'] },
            ]
        },
    ];

    const container = document.getElementById('malla-curricular-container');
    const notificacion = document.getElementById('notificacion');
    let ramosAprobados = [];

    // --- FUNCIONES ---

    // Obtiene los ramos aprobados desde localStorage
    const cargarRamosAprobados = () => {
        const guardados = localStorage.getItem('ramosAprobadosAuditoria');
        ramosAprobados = guardados ? JSON.parse(guardados) : [];
    };

    // Guarda los ramos aprobados en localStorage
    const guardarRamosAprobados = () => {
        localStorage.setItem('ramosAprobadosAuditoria', JSON.stringify(ramosAprobados));
    };

    // Muestra una notificación temporal
    const mostrarNotificacion = (mensaje) => {
        notificacion.textContent = mensaje;
        notificacion.classList.add('show');
        setTimeout(() => {
            notificacion.classList.remove('show');
        }, 3000); // La notificación desaparece después de 3 segundos
    };

    // Busca el nombre de un ramo por su ID
    const getNombreRamoPorId = (id) => {
        for (const semestre of mallaData) {
            const ramo = semestre.ramos.find(r => r.id === id);
            if (ramo) return ramo.nombre;
        }
        return 'Ramo no encontrado';
    };

    // Verifica si los requisitos de un ramo están cumplidos
    const verificarRequisitos = (ramoId) => {
        const ramo = mallaData.flatMap(s => s.ramos).find(r => r.id === ramoId);
        if (!ramo || ramo.requisitos.length === 0) {
            return { cumplidos: true, faltantes: [] };
        }

        const faltantes = ramo.requisitos.filter(reqId => !ramosAprobados.includes(reqId));
        return {
            cumplidos: faltantes.length === 0,
            faltantes: faltantes.map(getNombreRamoPorId) // Devuelve los nombres de los ramos faltantes
        };
    };

    // Maneja el clic en un ramo
    const handleRamoClick = (e) => {
        const ramoDiv = e.target.closest('.ramo');
        if (!ramoDiv) return;

        const ramoId = ramoDiv.dataset.id;
        const yaAprobado = ramosAprobados.includes(ramoId);

        if (yaAprobado) {
            // Desaprobar el ramo (opcional, se puede comentar si no se quiere esta función)
            ramosAprobados = ramosAprobados.filter(id => id !== ramoId);
        } else {
            // Intentar aprobar el ramo
            const { cumplidos, faltantes } = verificarRequisitos(ramoId);
            if (cumplidos) {
                ramosAprobados.push(ramoId);
            } else {
                mostrarNotificacion(`Requisitos pendientes: ${faltantes.join(', ')}`);
                return; // Detiene la ejecución si hay requisitos pendientes
            }
        }
        
        guardarRamosAprobados();
        actualizarVisualizacionMalla();
    };

    // Actualiza la apariencia de todos los ramos (aprobado, bloqueado, disponible)
    const actualizarVisualizacionMalla = () => {
        const todosLosRamosDivs = document.querySelectorAll('.ramo');
        todosLosRamosDivs.forEach(ramoDiv => {
            const ramoId = ramoDiv.dataset.id;
            const yaAprobado = ramosAprobados.includes(ramoId);
            const { cumplidos } = verificarRequisitos(ramoId);

            ramoDiv.classList.remove('aprobado', 'bloqueado');

            if (yaAprobado) {
                ramoDiv.classList.add('aprobado');
            } else if (!cumplidos) {
                ramoDiv.classList.add('bloqueado');
            }
        });
    };

    // Genera el HTML de la malla curricular
    const generarMalla = () => {
        mallaData.forEach(semestreData => {
            const semestreDiv = document.createElement('div');
            semestreDiv.className = 'semestre';

            const titulo = document.createElement('h2');
            titulo.textContent = `Semestre ${semestreData.semestre}`;
            semestreDiv.appendChild(titulo);

            semestreData.ramos.forEach(ramo => {
                const ramoDiv = document.createElement('div');
                ramoDiv.className = 'ramo';
                ramoDiv.dataset.id = ramo.id;
                ramoDiv.textContent = ramo.nombre;
                semestreDiv.appendChild(ramoDiv);
            });

            container.appendChild(semestreDiv);
        });
    };

    // --- INICIALIZACIÓN ---
    
    generarMalla();
    cargarRamosAprobados();
    actualizarVisualizacionMalla();
    container.addEventListener('click', handleRamoClick);

});
