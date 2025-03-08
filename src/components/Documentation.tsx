import { FileText, Shield, Lock, Download } from 'lucide-react';

export const Documentation = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Gerador de Currículo
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Uma ferramenta moderna e profissional para criar currículos impressionantes, totalmente gratuita e sem necessidade de cadastro.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20">
          <FileText className="w-8 h-8 mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Múltiplos Templates</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Escolha entre diversos modelos profissionais e personalizáveis para seu currículo.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20">
          <Lock className="w-8 h-8 mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Privacidade Garantida</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Seus dados nunca são armazenados em nossos servidores. Tudo acontece localmente no seu navegador.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20">
          <Download className="w-8 h-8 mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Exportação em PDF</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Exporte seu currículo em PDF com alta qualidade, pronto para envio.
          </p>
        </div>
        {/* <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20">
          <Code className="w-8 h-8 mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Código Aberto</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Projeto open-source, transparente e mantido pela comunidade.
          </p>
        </div> */}
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-semibold">Privacidade e Segurança</h2>
        </div>
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            Nossa aplicação foi projetada com sua privacidade em mente. Aqui está como protegemos seus dados:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Processamento Local:</strong> Todos os dados são processados localmente no seu navegador.
            </li>
            <li>
              <strong>Sem Armazenamento:</strong> Não armazenamos nenhuma informação em servidores externos.
            </li>
            <li>
              <strong>Sem Cookies:</strong> Não utilizamos cookies de rastreamento.
            </li>
            <li>
              <strong>Sem Cadastro:</strong> Não é necessário criar conta ou fornecer dados pessoais.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Termos de Uso</h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            Ao utilizar nossa aplicação, você concorda com os seguintes termos:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              A aplicação é fornecida "como está", sem garantias de qualquer tipo.
            </li>
            <li>
              Você é responsável pelo conteúdo que inclui em seu currículo.
            </li>
            <li>
              O uso da aplicação é gratuito e para fins não comerciais.
            </li>
            <li>
              Não nos responsabilizamos por perda de dados durante o uso da aplicação.
            </li>
            <li>
              Você concorda em não usar a aplicação para fins ilegais ou não autorizados.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};