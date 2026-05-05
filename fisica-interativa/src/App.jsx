import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  ArrowRight, 
  Activity, 
  ArrowDownCircle, 
  MoveDiagonal, 
  BookOpen,
  Play,
  Calculator,
  Info
} from 'lucide-react';

// --- COMPONENTES GERAIS ---

const Card = ({ title, icon: Icon, children, color = "blue" }) => {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 text-blue-900",
    green: "bg-green-50 border-green-200 text-green-900",
    purple: "bg-purple-50 border-purple-200 text-purple-900",
    orange: "bg-orange-50 border-orange-200 text-orange-900",
    red: "bg-red-50 border-red-200 text-red-900",
  };

  return (
    <div className={`p-6 rounded-2xl border-2 ${colorClasses[color]} mb-6 shadow-sm`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg bg-white bg-opacity-50`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
};

const Formula = ({ equation, description }) => (
  <div className="bg-white p-4 rounded-xl border border-gray-200 text-center my-4 shadow-inner">
    <p className="text-2xl font-mono font-bold text-gray-800 mb-2">{equation}</p>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

// --- MÓDULOS DE AULA ---

const Home = () => (
  <div className="animate-fade-in text-center max-w-3xl mx-auto mt-10">
    <div className="bg-blue-600 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
      <Rocket className="w-12 h-12" />
    </div>
    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">E aí, galera! Bem-vindos à Física da Vida Real 🚀</h1>
    <p className="text-xl text-gray-600 mb-8">
      Esqueça aquela decoreba chata. Aqui a gente vai entender como o universo funciona olhando pras coisas do nosso dia a dia: de andar de skate a chutar uma bola.
    </p>
    <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-2xl text-left">
      <h3 className="text-xl font-bold text-yellow-800 mb-2">Como usar esta plataforma?</h3>
      <p className="text-yellow-900">
        Use o menu lateral para navegar pelos assuntos. Em cada página você vai encontrar:
      </p>
      <ul className="list-disc pl-6 mt-3 text-yellow-900 space-y-2 font-medium">
        <li>A explicação no idioma "humano" (sem complicação!).</li>
        <li>Exemplos que você vive todo dia.</li>
        <li>As fórmulas matemáticas (que são só um atalho pra pensar mais rápido).</li>
        <li>Um <strong>Simulador Interativo</strong> pra você testar com suas próprias mãos.</li>
      </ul>
    </div>
  </div>
);

const Vetores = () => {
  const [x, setX] = useState(4);
  const [y, setY] = useState(3);
  const hipotenusa = Math.sqrt(x*x + y*y).toFixed(1);

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <ArrowRight className="text-blue-500" /> Vetores: O Mapa do Tesouro
      </h2>
      
      <Card title="O que é isso, professor?" icon={BookOpen} color="blue">
        <p>
          Sabe quando você pergunta onde fica a padaria e alguém diz: "Anda 3 quarteirões"? Isso não ajuda muito, né? Você precisa saber <strong>para qual lado</strong>.
        </p>
        <p className="mt-2">
          Um <strong>vetor</strong> é exatamente isso: uma seta matemática que te diz a <em>quantidade</em> (o tamanho do passo), a <em>direção</em> (na horizontal ou vertical) e o <em>sentido</em> (pra direita, esquerda, cima, baixo).
        </p>
      </Card>

      <Card title="Exemplo do Cotidiano" icon={Activity} color="orange">
        <p>
          Imagina você empurrando um sofá pesado junto com seu amigo. Se você empurrar pra frente e ele empurrar pro lado, o sofá vai andar na <strong>diagonal</strong>! O vetor resultante é o caminho que o sofá faz.
        </p>
      </Card>

      <Card title="A Matemática da Coisa" icon={Calculator} color="purple">
        <p>Quando temos dois vetores fazendo um ângulo de 90º (como empurrar pra frente e pro lado), usamos o famoso Teorema de Pitágoras para descobrir o tamanho do vetor final (resultante).</p>
        <Formula equation="R² = x² + y²" description="R é o vetor Resultante, x e y são os vetores originais." />
      </Card>

      <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-sm mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Play className="text-green-500" /> Simulador: Empurrando o Sofá
        </h3>
        <p className="text-gray-600 mb-6">Ajuste a força que você empurra pra Direita (X) e pra Cima (Y). Veja o cálculo passo a passo sendo feito em tempo real!</p>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Força para a Direita (X): <span className="text-red-500">{x}</span>
              </label>
              <input type="range" min="1" max="10" value={x} onChange={(e) => setX(Number(e.target.value))} className="w-full accent-red-500" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Força para Cima (Y): <span className="text-blue-500">{y}</span>
              </label>
              <input type="range" min="1" max="10" value={y} onChange={(e) => setY(Number(e.target.value))} className="w-full accent-blue-500" />
            </div>
            
            {/* Bloco de Cálculo Dinâmico */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-inner">
              <p className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wider">Memória de Cálculo (Pitágoras)</p>
              <div className="font-mono text-slate-800 space-y-2 text-sm">
                <p>R² = <span className="text-red-500">X</span>² + <span className="text-blue-500">Y</span>²</p>
                <p>R² = <span className="text-red-500 font-bold">{x}</span>² + <span className="text-blue-500 font-bold">{y}</span>²</p>
                <p>R² = <span className="text-red-400">{x*x}</span> + <span className="text-blue-400">{y*y}</span></p>
                <p>R² = {x*x + y*y}</p>
                <p>R = &radic;{x*x + y*y}</p>
                <div className="pt-2 mt-2 border-t border-slate-200">
                  <p className="text-lg font-bold text-green-600">Resultante (R) &asymp; {hipotenusa}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center bg-gray-50 rounded-xl p-4 border border-gray-200">
            {/* SVG Visualizer com numeração */}
            <svg width="100%" height="250" viewBox="-5 -5 130 135" className="transform rotate-0 font-sans">
              {/* Grid e Numeração dos Eixos */}
              <g stroke="#e5e7eb" strokeWidth="1">
                {/* Linhas verticais e números do eixo X */}
                {[...Array(11)].map((_, i) => (
                  <React.Fragment key={`v${i}`}>
                    <line x1={i*10 + 10} y1="0" x2={i*10 + 10} y2="110" />
                    {i > 0 && <text x={i*10 + 10} y="120" fontSize="5" fill="#9ca3af" textAnchor="middle">{i}</text>}
                  </React.Fragment>
                ))}
                {/* Linhas horizontais e números do eixo Y */}
                {[...Array(12)].map((_, i) => (
                  <React.Fragment key={`h${i}`}>
                    <line x1="10" y1={i*10} x2="120" y2={i*10} />
                    {i > 0 && i <= 10 && <text x="6" y={110 - i*10 + 2} fontSize="5" fill="#9ca3af" textAnchor="end">{i}</text>}
                  </React.Fragment>
                ))}
                {/* Origem (0) */}
                <text x="6" y="120" fontSize="5" fill="#9ca3af" textAnchor="end">0</text>
              </g>

              {/* Eixos principais mais grossos */}
              <line x1="10" y1="110" x2="120" y2="110" stroke="#9ca3af" strokeWidth="1.5" />
              <line x1="10" y1="110" x2="10" y2="0" stroke="#9ca3af" strokeWidth="1.5" />

              {/* Vetor Y (Azul) - desenhado de baixo pra cima */}
              <line x1="10" y1="110" x2="10" y2={110 - y*10} stroke="#3b82f6" strokeWidth="4" markerEnd="url(#arrow-blue)" />
              {/* Vetor X (Vermelho) - desenhado da esquerda pra direita */}
              <line x1="10" y1="110" x2={10 + x*10} y2="110" stroke="#ef4444" strokeWidth="4" markerEnd="url(#arrow-red)" />
              {/* Resultante (Verde) */}
              <line x1="10" y1="110" x2={10 + x*10} y2={110 - y*10} stroke="#22c55e" strokeWidth="5" strokeDasharray="5,5" markerEnd="url(#arrow-green)" />
              
              <defs>
                <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" /></marker>
                <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" /></marker>
                <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" /></marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComposicaoMovimento = () => {
  const [vOnibus, setVOnibus] = useState(50);
  const [vPessoa, setVPessoa] = useState(-5);
  const [tempo, setTempo] = useState(0);

  // Animação em loop dinâmico (requestAnimationFrame para fluidez)
  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();
    
    const animate = (time) => {
      const deltaTime = time - lastTime;
      lastTime = time;
      
      setTempo((prev) => {
        // Velocidade do loop: o tempo vai de 0 a 1 e recomeça
        const next = prev + (deltaTime * 0.0004); 
        return next > 1 ? 0 : next;
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const vResultante = vOnibus + vPessoa;

  // Fatores de escala para o desenho no SVG caber na tela
  const scale = 2.5; 
  const busStartX = -20;
  const busWidth = 80;
  const personOffset = busWidth / 2; // Passageiro começa no meio do ônibus

  // O ônibus se move para a direita baseado no tempo (0 a 1)
  const currentBusX = busStartX + (vOnibus * tempo * scale);
  // A pessoa se move relativa à posição atual do ônibus
  const currentPersonX = currentBusX + personOffset + (vPessoa * tempo * scale);

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <MoveDiagonal className="text-green-500" /> Composição de Movimento
      </h2>
      
      <Card title="A Sacada de Galileu" icon={BookOpen} color="green">
        <p>
          Sabe o que Galileu descobriu lá no passado? Que se você está fazendo dois movimentos ao mesmo tempo, um <strong>não atrapalha o outro</strong>. Eles são independentes!
        </p>
      </Card>

      <Card title="Exemplo do Cotidiano" icon={Activity} color="orange">
        <p>
          Imagine que você está andando dentro de um ônibus lotado. O ônibus está a 50 km/h pra frente. Você levanta e começa a andar pro fundo do ônibus a 5 km/h. 
        </p>
        <p className="mt-2 font-bold">
          Para alguém que está na calçada vendo, você está indo pra frente a 45 km/h (50 do ônibus menos os seus 5 pra trás). Misturamos os dois movimentos!
        </p>
      </Card>

      <Card title="A Matemática da Coisa" icon={Calculator} color="purple">
        <p>Quando os movimentos estão na mesma direção (na mesma linha reta), a gente soma ou subtrai as velocidades.</p>
        <Formula equation="V_total = V_onibus + V_pessoa" description="Atenção ao sinal: use valor negativo para a pessoa se ela andar para o fundo (para trás)!" />
      </Card>
      
      {/* NOVO SIMULADOR ANIMADO */}
      <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-sm mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Play className="text-green-500" /> Simulador: O Passageiro no Ônibus
        </h3>
        <p className="text-gray-600 mb-6">Ajuste a velocidade do ônibus e a direção do passageiro. Observe como a <strong>Velocidade Resultante</strong> e a posição do passageiro mudam em tempo real!</p>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Velocidade do Ônibus: <span className="text-blue-600">{vOnibus} km/h</span>
              </label>
              <input type="range" min="0" max="80" value={vOnibus} onChange={(e) => setVOnibus(Number(e.target.value))} className="w-full accent-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Velocidade da Pessoa (dentro do ônibus): <span className={vPessoa < 0 ? "text-red-500" : "text-green-600"}>{vPessoa > 0 ? '+'+vPessoa : vPessoa} km/h</span>
              </label>
              <input type="range" min="-20" max="20" value={vPessoa} onChange={(e) => setVPessoa(Number(e.target.value))} className="w-full accent-green-500" />
              <p className="text-xs text-gray-500 mt-1">Valores negativos = andando na direção oposta ao ônibus.</p>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-inner flex flex-col justify-center">
              <p className="font-bold text-slate-700 mb-2 text-sm uppercase tracking-wider">Velocidade Resultante (Absoluta)</p>
              <div className="text-3xl font-black text-indigo-700">
                {vResultante} <span className="text-lg font-medium text-indigo-500">km/h</span>
              </div>
              <p className="text-sm font-mono text-slate-600 mt-2 bg-white inline-block p-2 rounded border border-slate-200 w-fit">
                {vOnibus} + ({vPessoa}) = {vResultante}
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center bg-gray-50 rounded-xl p-4 border border-gray-200 overflow-hidden relative">
            <svg width="100%" height="200" viewBox="0 0 300 200" className="font-sans">
              <defs>
                <marker id="arrow-blue-comp" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" /></marker>
                <marker id="arrow-green-comp" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" /></marker>
              </defs>

              {/* Vetores Visuais Fixos no Topo */}
              <text x="10" y="20" fontSize="12" fill="#3b82f6" fontWeight="bold">V_ônibus</text>
              <line x1="75" y1="16" x2={75 + (vOnibus * 1.5) || 75.01} y2="16" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow-blue-comp)" />
              
              <text x="10" y="40" fontSize="12" fill="#10b981" fontWeight="bold">V_pessoa</text>
              <line x1="75" y1="36" x2={75 + (vPessoa * 1.5) || 75.01} y2="36" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-green-comp)" />

              {/* Asfalto */}
              <rect x="0" y="150" width="100%" height="50" fill="#cbd5e1" />
              <line x1="0" y1="150" x2="300" y2="150" stroke="#94a3b8" strokeWidth="4" />
              
              {/* Linhas brancas da pista */}
              {[...Array(10)].map((_, i) => (
                <line key={i} x1={i * 40} y1="175" x2={i * 40 + 20} y2="175" stroke="#f8fafc" strokeWidth="4" />
              ))}

              {/* Desenho do Ônibus (Animado) */}
              <g transform={`translate(${currentBusX}, 0)`}>
                {/* Chassi */}
                <rect x="0" y="80" width={busWidth} height="60" rx="8" fill="#3b82f6" />
                {/* Janela Panorâmica */}
                <rect x="5" y="90" width="70" height="25" rx="4" fill="#bae6fd" />
                {/* Rodas */}
                <circle cx="20" cy="140" r="10" fill="#334155" />
                <circle cx="60" cy="140" r="10" fill="#334155" />
              </g>

              {/* Desenho do Passageiro (Animado, visível pela janela) */}
              <g transform={`translate(${currentPersonX}, 0)`}>
                <circle cx="0" cy="100" r="6" fill="#ef4444" />
                <rect x="-3" y="106" width="6" height="10" rx="2" fill="#ef4444" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 border-2 border-indigo-200 p-6 rounded-2xl text-indigo-900 mt-6 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <Info className="w-6 h-6" />
          <h3 className="text-xl font-bold">Resumo da Ópera</h3>
        </div>
        <p>A composição de movimentos é a base para entendermos os lançamentos (horizontal e oblíquo). Lembre-se sempre: o que acontece no eixo X (horizontal) não afeta o que acontece no eixo Y (vertical).</p>
      </div>
    </div>
  );
};

const QuedaLivre = () => {
  const [altura, setAltura] = useState(45); // metros
  const gravidade = 10; // m/s^2 (simplificado)
  const tempo = Math.sqrt((2 * altura) / gravidade).toFixed(2);
  const velocidadeFinal = (gravidade * tempo).toFixed(1);

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <ArrowDownCircle className="text-red-500" /> Queda Livre
      </h2>
      
      <Card title="Caiu, perdeu!" icon={BookOpen} color="red">
        <p>
          "Queda Livre" é o nome chique que damos pra quando soltamos algo e deixamos a gravidade puxar pro chão. A palavra "livre" significa que estamos ignorando o vento e a resistência do ar. 
        </p>
        <p className="mt-2">
          Aqui na Terra, a gravidade puxa as coisas acelerando-as a quase 10 m/s². Isso significa que a cada segundo que passa caindo, o objeto fica 10 m/s mais rápido!
        </p>
      </Card>

      <Card title="Exemplo do Cotidiano" icon={Activity} color="orange">
        <p>
          Aquele momento de pânico quando seu celular escorrega da mão em direção ao chão! Ele começa do zero (velocidade inicial = 0) e vai acelerando até bater no piso (CRASH!). 
        </p>
      </Card>

      <Card title="A Matemática da Coisa" icon={Calculator} color="purple">
        <p>Como calculamos de qual altura o objeto caiu se soubermos o tempo?</p>
        <Formula equation="h = (g · t²) / 2" description="h = Altura, g = Gravidade (10), t = Tempo caindo." />
      </Card>

      <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-sm mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Play className="text-green-500" /> Simulador: O Prédio e a Moeda
        </h3>
        <p className="text-gray-600 mb-6">Escolha a altura do prédio e veja quanto tempo demora pra bater no chão e a que velocidade chega.</p>
        
        <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 p-6 rounded-xl">
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Altura do Prédio (h): <span className="text-red-500">{altura} m</span></label>
              <input type="range" min="5" max="100" step="5" value={altura} onChange={(e) => setAltura(Number(e.target.value))} className="w-full accent-red-500" />
            </div>
            
            {/* Bloco de Cálculo Dinâmico */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-inner">
              <p className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wider">Memória de Cálculo</p>
              
              {/* Cálculo do Tempo */}
              <div className="font-mono text-slate-800 space-y-1 text-sm mb-4">
                <p className="text-gray-500 text-xs font-sans mb-1 font-bold">1. Descobrindo o tempo de queda:</p>
                <p>h = (g &middot; t&sup2;) / 2</p>
                <p>t = &radic;(2 &middot; <span className="text-red-500 font-bold">h</span> / g)</p>
                <p>t = &radic;(2 &middot; <span className="text-red-500 font-bold">{altura}</span> / 10)</p>
                <p>t = &radic;({2 * altura} / 10)</p>
                <p>t = &radic;{((2 * altura) / 10).toFixed(1)}</p>
                <div className="pt-2 mt-2 border-t border-slate-100">
                  <p className="text-base font-bold text-red-600">Tempo (t) &asymp; {tempo} s</p>
                </div>
              </div>

              {/* Cálculo da Velocidade */}
              <div className="font-mono text-slate-800 space-y-1 text-sm">
                <p className="text-gray-500 text-xs font-sans mb-1 font-bold">2. Descobrindo a velocidade final:</p>
                <p>V = g &middot; <span className="text-red-600 font-bold">t</span></p>
                <p>V = 10 &middot; <span className="text-red-600 font-bold">{tempo}</span></p>
                <div className="pt-2 mt-2 border-t border-slate-100">
                  <p className="text-base font-bold text-orange-600">Velocidade (V) &asymp; {velocidadeFinal} m/s</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3 text-right">*Considerando g = 10 m/s&sup2; e sem resistência do ar.</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Prédio simples e objeto caindo */}
            <div className="relative w-32 h-64 border-b-4 border-gray-800 flex items-end justify-center">
              <div className="w-20 bg-gray-700 rounded-t-sm" style={{ height: `${(altura / 100) * 100}%`, transition: 'height 0.3s' }}>
                 {/* Janelinhas */}
                 <div className="grid grid-cols-2 gap-2 p-2 opacity-50">
                   {[...Array(6)].map((_,i) => <div key={i} className="w-4 h-4 bg-yellow-200 rounded-sm"></div>)}
                 </div>
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4 text-center">
                 <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
                 <div className="text-xs font-bold text-red-500 mt-1">{altura}m</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LancamentoHorizontal = () => {
  const [altura, setAltura] = useState(20); // metros (altura da mesa/penhasco)
  const [vx, setVx] = useState(15); // m/s (velocidade horizontal)
  const g = 10;
  
  // Fórmulas
  const tempo = Math.sqrt((2 * altura) / g).toFixed(2);
  const alcance = (vx * tempo).toFixed(1);

  // Escalas para o SVG
  const chaoY = 180;
  const escalaX = 2.5;
  const escalaY = 2; // Para caber alturas até 100m sem quebrar o layout
  
  // Gerar pontos da trajetória
  const pontosCurva = [];
  for (let t = 0; t <= tempo; t += tempo/20) {
    const x = vx * t;
    const y = 0.5 * g * t * t; // Queda livre no eixo Y
    const px = 40 + (x * escalaX); // 40 é a largura da beirada (mesa)
    const py = chaoY - (altura * escalaY) + (y * escalaY);
    pontosCurva.push(`${px},${py}`);
  }
  // Garantir que o último ponto toca no chão perfeitamente
  pontosCurva.push(`${40 + (alcance * escalaX)},${chaoY}`);

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <ArrowRight className="text-blue-500" /><ArrowDownCircle className="text-red-500 -ml-5" /> Lançamento Horizontal
      </h2>
      
      <Card title="Juntando as Peças" icon={BookOpen} color="blue">
        <p>
          Lembra da composição de movimento? O Lançamento Horizontal é simplesmente um "2 em 1". 
        </p>
        <p className="mt-2">
          Enquanto o objeto vai pra <strong>frente</strong> com velocidade constante (movimento uniforme), ele também <strong>cai</strong> sendo puxado pela gravidade (queda livre). Um movimento não afeta o outro!
        </p>
      </Card>

      <Card title="Exemplo do Cotidiano" icon={Activity} color="orange">
        <p>
          Imagine o seu gato empurrando um copo de vidro da borda da mesa da sala. O copo é jogado para frente (horizontal), mas no instante em que sai da mesa, a gravidade diz: "Vem pro chão!". Ele faz uma curva (metade de uma parábola) até quebrar.
        </p>
      </Card>

      <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-sm mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Play className="text-green-500" /> Simulador: O Gato e o Copo
        </h3>
        <p className="text-gray-600 mb-6">Ajuste a altura da mesa e a força do "empurrão" do gato. Veja as fórmulas calculando sozinhas onde o copo vai cair!</p>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="bg-red-50 p-4 rounded-xl">
              <label className="block text-sm font-bold text-red-900 mb-2">Altura (h): {altura} m</label>
              <input type="range" min="5" max="80" value={altura} onChange={(e) => setAltura(Number(e.target.value))} className="w-full accent-red-600" />
            </div>
            <div className="bg-blue-50 p-4 rounded-xl">
              <label className="block text-sm font-bold text-blue-900 mb-2">Velocidade pra frente (Vx): {vx} m/s</label>
              <input type="range" min="5" max="30" value={vx} onChange={(e) => setVx(Number(e.target.value))} className="w-full accent-blue-600" />
            </div>
            
            {/* Bloco de Cálculo Dinâmico */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-inner overflow-hidden">
              <p className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wider">Memória de Cálculo</p>
              
              <div className="font-mono text-slate-800 space-y-1 text-sm mb-4">
                <p className="text-gray-500 text-xs font-sans mb-1 font-bold">1. Eixo Y (Calcula o Tempo caindo):</p>
                <p>t = &radic;(2 &middot; <span className="text-red-600 font-bold">h</span> / g)</p>
                <p>t = &radic;(2 &middot; <span className="text-red-600 font-bold">{altura}</span> / 10)</p>
                <p>t &asymp; <span className="text-purple-600 font-bold">{tempo}</span> s</p>
              </div>

              <div className="font-mono text-slate-800 space-y-1 text-sm">
                <p className="text-gray-500 text-xs font-sans mb-1 font-bold">2. Eixo X (Calcula a Distância):</p>
                <p>Alcance = <span className="text-blue-600 font-bold">Vx</span> &middot; <span className="text-purple-600 font-bold">t</span></p>
                <p>Alcance = <span className="text-blue-600 font-bold">{vx}</span> &middot; <span className="text-purple-600 font-bold">{tempo}</span></p>
                <div className="pt-2 mt-2 border-t border-slate-100">
                  <p className="text-base font-bold text-green-600">Alcance &asymp; {alcance} m</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 bg-slate-50 border border-slate-200 rounded-xl p-4 overflow-hidden relative flex flex-col justify-end min-h-[250px]">
             {/* Gráfico do Lançamento Horizontal */}
             <svg viewBox="0 0 300 200" className="w-full h-full overflow-visible font-sans">
               {/* Asfalto/Chão */}
               <rect x="0" y={chaoY} width="350" height="20" fill="#94a3b8" />
               <line x1="0" y1={chaoY} x2="350" y2={chaoY} stroke="#475569" strokeWidth="2" />
               
               {/* A Mesa / Penhasco */}
               <rect x="0" y={chaoY - (altura * escalaY)} width="40" height={altura * escalaY} fill="#8b5cf6" />
               <line x1="0" y1={chaoY - (altura * escalaY)} x2="40" y2={chaoY - (altura * escalaY)} stroke="#6d28d9" strokeWidth="4" />
               <text x="5" y={chaoY - (altura * escalaY) + 20} fontSize="12" fill="#fff" fontWeight="bold">{altura}m</text>

               {/* Curva da trajetória */}
               {pontosCurva.length > 0 && (
                 <polyline 
                   points={pontosCurva.join(' ')} 
                   fill="none" 
                   stroke="#ef4444" 
                   strokeWidth="3" 
                   strokeDasharray="4,4"
                 />
               )}
               
               {/* Indicador de Alcance */}
               <line x1="40" y1={chaoY + 10} x2={40 + (alcance * escalaX)} y2={chaoY + 10} stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrow-green)" markerStart="url(#arrow-green)" />
               <text x={40 + (alcance * escalaX)/2} y={chaoY + 25} fontSize="12" fill="#166534" fontWeight="bold" textAnchor="middle">{alcance}m</text>

               {/* O Objeto (no ar/final) */}
               <circle cx={40 + (alcance * escalaX)} cy={chaoY} r="5" fill="#f97316" />
               {/* O Objeto (na mesa) */}
               <circle cx={35} cy={chaoY - (altura * escalaY) - 5} r="5" fill="#f97316" />
             </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const LancamentoObliquo = () => {
  const [velocidade, setVelocidade] = useState(20);
  const [anguloGraus, setAnguloGraus] = useState(45);
  
  const g = 10;
  const anguloRad = anguloGraus * (Math.PI / 180);
  
  // Fórmulas
  const v_x = velocidade * Math.cos(anguloRad);
  const v_y = velocidade * Math.sin(anguloRad);
  
  const tempoTotal = (2 * v_y) / g;
  const alturaMaxima = (v_y * v_y) / (2 * g);
  const alcance = v_x * tempoTotal;

  // Gerar pontos para a curva (parábola)
  const pontosCurva = [];
  for (let t = 0; t <= tempoTotal; t += tempoTotal/20) {
    const x = v_x * t;
    const y = (v_y * t) - (0.5 * g * t * t);
    // Mapeando para o SVG: x vai de 0 a 100, y vai de 0 a 100
    const scaleX = x * 3; 
    const scaleY = 150 - (y * 3); 
    pontosCurva.push(`${scaleX},${scaleY}`);
  }
  // Garantir o último ponto
  pontosCurva.push(`${alcance * 3},150`);

  return (
    <div className="animate-fade-in max-w-4xl mx-auto pb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Rocket className="text-purple-500" /> Lançamento Oblíquo
      </h2>
      
      <Card title="O Chute Perfeito" icon={BookOpen} color="purple">
        <p>
          Esta é a física dos esportes! Basquete, futebol, golfe... Lançamento oblíquo é quando jogamos algo <strong>pra cima e pra frente</strong> ao mesmo tempo, ou seja, com um <em>ângulo</em>.
        </p>
        <p className="mt-2">
          O objeto sobe perdendo velocidade (a gravidade atrapalha), para no ponto mais alto, e começa a cair, sempre indo para a frente. O desenho que ele faz no ar é uma <strong>parábola</strong>.
        </p>
      </Card>

      <Card title="A Matemática da Coisa" icon={Calculator} color="blue">
        <p className="mb-2">A primeira coisa é usar os Vetores (lembra da primeira aula?) para quebrar o chute em dois:</p>
        <ul className="list-disc pl-6 mb-4 font-mono space-y-1">
          <li>Velocidade pra frente (Vx) = V · cos(ângulo)</li>
          <li>Velocidade pra cima (Vy) = V · sen(ângulo)</li>
        </ul>
        <p>O tempo de voo e a altura dependem só da velocidade Vy (pra cima)! O alcance depende do Vx e do tempo de voo.</p>
      </Card>

      <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-sm mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Play className="text-green-500" /> Simulador: O Chute de Falta
        </h3>
        <p className="text-gray-600 mb-6">Ajuste a força (velocidade) do chute e o ângulo. Tente descobrir qual ângulo faz a bola ir mais longe e observe o passo a passo dos cálculos!</p>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="bg-purple-50 p-4 rounded-xl">
              <label className="block text-sm font-bold text-purple-900 mb-2">Força do Chute (V): {velocidade} m/s</label>
              <input type="range" min="10" max="30" value={velocidade} onChange={(e) => setVelocidade(Number(e.target.value))} className="w-full accent-purple-600" />
            </div>
            <div className="bg-orange-50 p-4 rounded-xl">
              <label className="block text-sm font-bold text-orange-900 mb-2">Ângulo do Chute: {anguloGraus}°</label>
              <input type="range" min="10" max="80" value={anguloGraus} onChange={(e) => setAnguloGraus(Number(e.target.value))} className="w-full accent-orange-600" />
            </div>
            
            {/* NOVO Bloco de Cálculo Dinâmico */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-inner mt-4">
              <p className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wider">Memória de Cálculo Passo a Passo</p>
              
              <div className="font-mono text-slate-800 space-y-1 text-xs sm:text-sm">
                <p className="text-gray-500 font-sans mb-1 font-bold">1. Quebrando o Vetor (X e Y):</p>
                <p>Vx = V &middot; cos({anguloGraus}&deg;) &asymp; {velocidade} &middot; {Math.cos(anguloRad).toFixed(2)} &asymp; <span className="text-red-500 font-bold">{v_x.toFixed(1)}</span> m/s</p>
                <p>Vy = V &middot; sen({anguloGraus}&deg;) &asymp; {velocidade} &middot; {Math.sin(anguloRad).toFixed(2)} &asymp; <span className="text-blue-500 font-bold">{v_y.toFixed(1)}</span> m/s</p>
                
                <p className="text-gray-500 font-sans mt-3 mb-1 font-bold">2. Tempo que fica no Ar:</p>
                <p>t = (2 &middot; Vy) / g = (2 &middot; <span className="text-blue-500 font-bold">{v_y.toFixed(1)}</span>) / 10 &asymp; <span className="text-green-600 font-bold">{tempoTotal.toFixed(2)}</span> s</p>
                
                <p className="text-gray-500 font-sans mt-3 mb-1 font-bold">3. Alcance (Quão longe vai):</p>
                <p>A = Vx &middot; t = <span className="text-red-500 font-bold">{v_x.toFixed(1)}</span> &middot; <span className="text-green-600 font-bold">{tempoTotal.toFixed(2)}</span></p>
                
                <div className="pt-2 mt-2 border-t border-slate-100 flex gap-4">
                   <p className="font-bold text-yellow-600 text-base">A &asymp; {alcance.toFixed(1)} m</p>
                   <p className="font-bold text-indigo-600 text-base">H.Máx &asymp; {alturaMaxima.toFixed(1)} m</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 bg-blue-50 border-2 border-blue-200 rounded-xl p-4 overflow-hidden flex flex-col justify-end min-h-[350px]">
            {/* SVG Trajectory */}
            <p className="text-center text-sm text-blue-800 font-bold mb-2">Trajetória da Bola no Ar</p>
            <div className="relative w-full h-64 bg-white rounded-lg border border-blue-100 flex items-end">
               <svg viewBox="0 0 350 160" className="w-full h-full overflow-visible font-sans">
                 {/* Eixo X (Chão) */}
                 <line x1="0" y1="150" x2="350" y2="150" stroke="#22c55e" strokeWidth="4" />
                 
                 {/* Curva da trajetória */}
                 {pontosCurva.length > 0 && (
                   <polyline 
                     points={pontosCurva.join(' ')} 
                     fill="none" 
                     stroke="#8b5cf6" 
                     strokeWidth="3" 
                     strokeDasharray="6,4"
                   />
                 )}
                 
                 {/* Indicador de Altura Máxima */}
                 {alturaMaxima > 0 && (
                   <>
                     <line 
                       x1={(alcance * 3)/2} y1={150} 
                       x2={(alcance * 3)/2} y2={150 - (alturaMaxima * 3)} 
                       stroke="#94a3b8" strokeDasharray="2,2" 
                     />
                     <text x={(alcance * 3)/2} y={145 - (alturaMaxima * 3)} fontSize="10" fill="#64748b" textAnchor="middle">h.máx</text>
                   </>
                 )}

                 {/* Indicador de Vetor Inicial */}
                 <line x1="0" y1="150" x2={v_x * 1.5} y2={150 - (v_y * 1.5)} stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrow-red)" />

                 {/* A Bola (no final) */}
                 <circle cx={alcance * 3} cy={150} r="5" fill="#f97316" />
                 {/* A Bola (no inicio) */}
                 <circle cx={0} cy={150} r="5" fill="#f97316" />
               </svg>
            </div>
            <p className="text-xs text-center text-gray-500 mt-3 bg-white p-2 rounded border border-blue-100">Dica: O ângulo de 45º é o segredo dos campeões para o maior alcance!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- APP PRINCIPAL E NAVEGAÇÃO ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Início', icon: Rocket },
    { id: 'vetores', label: '1. Vetores', icon: MoveDiagonal },
    { id: 'compmov', label: '2. Comp. de Movimento', icon: Activity },
    { id: 'queda', label: '3. Queda Livre', icon: ArrowDownCircle },
    { id: 'lanchoriz', label: '4. Lançamento Horizontal', icon: ArrowRight },
    { id: 'lancobliquo', label: '5. Lançamento Oblíquo', icon: Play },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'home': return <Home />;
      case 'vetores': return <Vetores />;
      case 'compmov': return <ComposicaoMovimento />;
      case 'queda': return <QuedaLivre />;
      case 'lanchoriz': return <LancamentoHorizontal />;
      case 'lancobliquo': return <LancamentoObliquo />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 font-sans">
      
      {/* Sidebar Navegação */}
      <aside className="w-full md:w-64 bg-slate-900 text-slate-300 flex flex-col shadow-xl z-10">
        <div className="p-6 bg-slate-950">
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <Rocket className="text-blue-500" /> Física101
          </h1>
          <p className="text-xs text-slate-400 mt-1">Sua aula interativa</p>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                activeTab === item.id 
                  ? 'bg-blue-600 text-white font-bold shadow-md' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 bg-slate-800 text-xs text-center border-t border-slate-700">
          Desenvolvido para alunos do 9º ano. <br/> A física está em tudo!
        </div>
      </aside>

      {/* Área Principal de Conteúdo */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 min-h-full relative">
           {renderContent()}
        </div>
      </main>
      
      {/* Estilos CSS Nativos básicos (ajustes do Tailwind) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}} />
    </div>
  );
}