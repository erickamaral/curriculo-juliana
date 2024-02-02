import Image from 'next/image';

import picture from '@/assets/juliana-barbosa-de-franca-amaral-advogada.jpg'
import { AwardIcon, BriefcaseIcon, CarFrontIcon, CrosshairIcon, GraduationCapIcon, HeartHandshakeIcon, MailIcon, MapPinIcon, PhoneCallIcon, ScaleIcon, StarIcon } from 'lucide-react';
import { Section, SectionContent, SectionIcon, SectionHeader, SectionTitle, SectionJob, SectionTraining } from '@/components/ui/section';
import { List, ListItem } from '@/components/ui/list';

export default function Home() {
  return (
    <main className="min-h-[100svh] flex flex-col">
      <div className="flex flex-1 mx-auto w-full max-w-7xl">
        <aside className="w-72 bg-purple-900 text-white flex flex-col gap-8 py-8 pb-16 text-sm">
          <section className="flex flex-col px-8 gap-6">
            <h3 className="font-bold text-2xl uppercase">Contato</h3>
            <dl className="flex gap-3">
              <dt>
                <MapPinIcon className="w-5 h-5" />
              </dt>
              <dd>
                Rua Rita Carneiro Diniz, 531, Apto 205i, Veleiros do Sul, João Pessoa, PB, 58077-174
              </dd>
            </dl>
            <dl className="flex gap-3">
              <dt>
                <PhoneCallIcon className="w-5 h-5" />
              </dt>
              <dd className="flex flex-col">
                <a href="https://wa.me/5583988099100" title="Entre em contato">
                  83 98809-9100
                </a>
                <a href="https://wa.me/55839981559100" title="Entre em contato">
                  83 998155-9100
                </a>
              </dd>
            </dl>
            <dl className="flex gap-3">
              <dt>
                <MailIcon className="w-5 h-5" />
              </dt>
              <dd>
                <a href="mailto:julianaafranca2@gmail.com" title="Entre em contato">
                  julianaafranca2@gmail.com
                </a>
              </dd>
            </dl>
            <dl className="flex gap-3">
              <dt>
                <CarFrontIcon className="w-5 h-5" />
              </dt>
              <dd>Categoria A/B</dd>
            </dl>
            <dl className="flex gap-3">
              <dt>
                <HeartHandshakeIcon className="w-5 h-5" />
              </dt>
              <dd>Casada</dd>
            </dl>
          </section>

          <hr className="mx-8 opacity-50" />

          <section className="flex flex-col px-8 gap-6">
            <h3 className="font-bold text-2xl uppercase">Idiomas</h3>
            <dl className="flex flex-col gap-3">
              <dt className="flex flex-col">
                <span className="font-bold">Português</span>
                <span className="text-sm opacity-80 font-light">Língua materna</span>
              </dt>
              <dd className="bg-purple-800 h-2">
                <span className="w-full h-full bg-white block" />
              </dd>
            </dl>
            <dl className="flex flex-col gap-3">
              <dt className="flex flex-col">
                <span className="font-bold">Inglês</span>
                <span className="text-sm opacity-80 font-light">Básico</span>
              </dt>
              <dd className="bg-purple-800 h-2">
                <span className="w-1/2 h-full bg-white block" />
              </dd>
            </dl>
          </section>
          <hr className="mx-8 opacity-50" />

          <section className="flex flex-col px-8 gap-6">
            <h3 className="font-bold text-2xl uppercase">Resumo Profissional</h3>
            <p>
              Advogada detentora de 10 anos de ilustre
              labuta nos meandros da advocacia,
              destacando-se, sobretudo, no excelsior
              domínio do direito bancário e na sábia
              jurisdição do direito do consumidor,
              ostentando uma trajetória dual na
              advocacia autônoma e como membro
              associado. Hábil na argumentação oral,
              meticulosa na pesquisa jurisprudencial e
              aconselhamento jurídico, bem como na
              arbitragem e negociação de acordos, além
              de exibir maestria na elaboração textual.
              Demonstrando eficácia aliada a sólidas
              habilidades de interação social, contribui
              significativamente para a entrega de
              serviços de primazia, bem como para o
              respaldo à equipe em variadas
              incumbências, visando cooperar de modo
              efetivo com as demandas laborais.
              Possuidora de excelentes aptidões
              comunicativas e uma vasta vivência no
              campo processual cível. Dotada da
              capacidade de harmonizar múltiplas
              incumbências, assegurando a efetividade
              da rotina operacional.
            </p>

            <p className="flex gap-2">
              <ScaleIcon className="w-6 h-6" /> OAB/PB 20.019
            </p>
          </section>
        </aside>

        <section className="flex flex-col p-16 gap-16">
          <h1 className="text-4xl font-extrabold text-purple-800">Juliana Barbosa de França Amaral</h1>

          <Section>
            <SectionHeader>
              <SectionIcon>
                <CrosshairIcon className="w-6 h-6" />
              </SectionIcon>
              <SectionTitle>Objetivo</SectionTitle>
            </SectionHeader>
            <SectionContent>
              <List>
                <ListItem>
                  Em busca de crescimento profissional na área advocatícia
                </ListItem>
              </List>
            </SectionContent>
          </Section>

          <Section>
            <SectionHeader>
              <SectionIcon>
                <BriefcaseIcon className="w-6 h-6" />
              </SectionIcon>
              <SectionTitle>Histórico Profissional</SectionTitle>
            </SectionHeader>

            <SectionContent>
              <SectionJob
                job="Advogada - Autônoma"
                place="João Pessoa, Paraíba"
                period="2023 - Atual"
              />

              <List>
                <ListItem>
                  Advogada autônoma cível
                </ListItem>
                <ListItem>
                  Atualmente atuante na seara de Direito de Família e Sucessões; Direito bancário e direito do consumidor
                </ListItem>
              </List>

              <SectionJob
                job="Advogada Associada - Nelson Wilians Advogados"
                place="Manaus, Amazonas"
                period="2021 - 2023"
              />

              <List>
                <ListItem>
                  Atuação de acompanhamento processual, em todas as fases do processo para o Banco Bradesco
                </ListItem>
                <ListItem>
                  Elaboração de peças jurídicas Cíveis: Contestações, Recursos, Impugnações
                </ListItem>
                <ListItem>
                  Embargos à Execução. Acompanhamento de todas as fases processuais até o arquivamento do processo
                </ListItem>
                <ListItem>
                  Reuniões períodicas diretamente com cliente para tratativas de demandas internas.
                </ListItem>
              </List>

              <SectionJob
                job="Advogada Associada - Rocha, Marinho & Sales Advogados Associados"
                place="João Pessoa, Paraíba"
                period="2016 - 2021"
              />

              <List>
                <ListItem>
                  Atuação na defesa de Ações Indenizatórias do Banco Bradesco SA, Banco Itaú
                  e Banco Votorantim
                </ListItem>
                <ListItem>
                  Elaboração de peças jurídicas Cíveis: Contestações, Recursos, Impugnações
                </ListItem>
                <ListItem>
                  Embargos à Execução. Acompanhamento de todas as fases processuais até o
                  arquivamento do processo;
                </ListItem>
                <ListItem>
                  Treinamento de estagiários;
                </ListItem>
                <ListItem>
                  Domínio de sistemas jurídicos diversos: PJE, PROJUDI, ESAJ, EPROC, etc;
                </ListItem>
                <ListItem>
                  Tratativa de grande fluxo processual (contencioso massificado);
                </ListItem>
                <ListItem>
                  Realização de audiências cíveis; Realização de acordos judiciais e
                  extrajudiciais;
                </ListItem>
                <ListItem>
                  Tratativa com correspondentes jurídicos de todo país;
                </ListItem>
                <ListItem>
                  Domínio do Office, sistemas internos do Banco Bradesco e do escritório, bem
                  como habilidade com planilhas
                </ListItem>
              </List>
            </SectionContent>
          </Section>

          <Section>
            <SectionHeader>
              <SectionIcon>
                <GraduationCapIcon className="w-6 h-6" />
              </SectionIcon>
              <SectionTitle>Formação acadêmica</SectionTitle>
            </SectionHeader>

            <SectionContent>
              <SectionTraining
                course="Pós-Graduação: Direito Civil e Processual"
                school="Civil Escola Superior deAdvocacia / ESA- PB"
                place="João Pessoa, Dezembro, 2000"
                status="Concluído"
              />

              <SectionTraining
                course="Bacharel emDireito:"
                school="CentroUniversitário de João Pessoa / UNIPÊ"
                place="João Pessoa, Dezembro, 2014.1"
                status="Concluído"
              />
            </SectionContent>
          </Section>

          <Section>
            <SectionHeader>
              <SectionIcon>
                <StarIcon className="w-6 h-6" />
              </SectionIcon>
              <SectionTitle>Habilidades e Competências</SectionTitle>
            </SectionHeader>

            <SectionContent>
              <List>
                <ListItem>
                  Capacidade de planejamento e organização para o cumprimento de prazos;
                </ListItem>
                <ListItem>
                  Familiaridade com os sistemas, softwares e ferramentas da área, CPJ
                </ListItem>
                <ListItem>
                  Dinamismo para execução de múltiplas tarefas;
                </ListItem>
                <ListItem>
                  Inteligência emocional para lidar com os desafios diários;
                </ListItem>
                <ListItem>
                  Habilidade com cálculos e sistemas informatizados;
                </ListItem>
                <ListItem>
                  Conhecimentos em Pacote Office, com foco em Word e Excel;
                </ListItem>
                <ListItem>
                  Cordialidade e simpatia no trato com as pessoas;
                </ListItem>
                <ListItem>
                  Bom relacionamento interpessoal para trabalho em equipe;
                </ListItem>
                <ListItem>
                  Flexibilidade e capacidade de negociação;
                </ListItem>
                <ListItem>
                  Comunicação eficiente com a equipe;
                </ListItem>
                <ListItem>
                  Disposição para o aprendizado e aprimoramento contínuos;
                </ListItem>
                <ListItem>
                  Responsabilidade e autonomia para realização de trabalho remoto;
                </ListItem>
                <ListItem>
                  Proatividade e iniciativa para resolução de problemas;
                </ListItem>
                <ListItem>
                  Domínio de diversos sistemas jurídicos para gestão processual (PJE, EPROC, ESAJ, PROJUDI, etc);
                </ListItem>
                <ListItem>
                  Determinação e persistência para o alcance de metas;
                </ListItem>
              </List>
            </SectionContent>
          </Section>

          <Section>
            <SectionHeader>
              <SectionIcon>
                <AwardIcon className="w-6 h-6" />
              </SectionIcon>
              <SectionTitle>Certificações</SectionTitle>
            </SectionHeader>

            <SectionContent>
              <List>
                <ListItem>
                  Certificação em Oratória pela Dra. Shirley Almeida, 2015
                </ListItem>
              </List>
            </SectionContent>
          </Section>
        </section>
      </div>
    </main>
  )
}
