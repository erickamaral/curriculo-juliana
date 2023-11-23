import Image from 'next/image';

import picture from '@/assets/juliana-barbosa-de-franca-amaral-advogada.jpg'
import { AwardIcon, BriefcaseIcon, CarFrontIcon, CrosshairIcon, GraduationCapIcon, HeartHandshakeIcon, MailIcon, MapPinIcon, PhoneCallIcon, ScaleIcon, StarIcon } from 'lucide-react';
import { Section, SectionContent, SectionIcon, SectionHeader, SectionTitle, SectionJob, SectionTraining } from '@/components/ui/section';
import { List, ListItem } from '@/components/ui/list';

export default function Home() {
  return (
    <main className="min-h-[100svh] flex flex-col">
      <div className="flex flex-1 mx-auto w-full max-w-7xl">
        <aside className="w-72 bg-purple-900 text-white flex flex-col gap-8 pb-16 text-sm">
          <Image
            src={picture}
            alt="Juliana Barbosa de França Amaral"
            width="1190"
            height="1219"
            className="w-full aspect-square object-cover"
            priority
          />
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
              <dd>
                <a href="https://wa.me/5583988099100" title="Entre em contato">
                  83 9 8809 9100
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
                <span className="text-sm opacity-80 font-light">Intermediário</span>
              </dt>
              <dd className="bg-purple-800 h-2">
                <span className="w-9/12 h-full bg-white block" />
              </dd>
            </dl>
          </section>
          <hr className="mx-8 opacity-50" />

          <section className="flex flex-col px-8 gap-6">
            <h3 className="font-bold text-2xl uppercase">Resumo Profissional</h3>
            <p>
              Advogada com 7 anos de experiência, especializada em direito Civil, com atuação na advocacia autônoma, bem como
              associada. Hábil na argumentação oral, pesquisa de casos e aconselhamento jurídico, bem como na arbitragem e
              negociação de acordos e ótima redação. Eficiente e com boas habilidades de
              relacionamento interpessoal, que
              contribuem para a prestação de um serviço de excelência e para o suporte à equipe em tarefas diversas, visando colaborar
              efetivamente com a rotina de trabalho. Excelentes habilidades de comunicação e sólida experiência na área processual cível. Capaz de conciliar múltiplas tarefas,
              garantindo a eficiência da rotina
              operacional.
            </p>

            <p className="flex gap-2">
              <ScaleIcon className="w-6 h-6" /> OAB/PB 123.456
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
                job="Advogada Autônoma"
                place="João Pessoa, Paraíba"
                period="2020 - 2022"
              />

              <List>
                <ListItem>
                  Advogada autônoma cível
                </ListItem>
                <ListItem>
                  Atualmente atuante na seara de Direito de Família e Sucessões
                </ListItem>
                <ListItem>
                  Membra da Comissão de Direito de Família e Sucessões da 31ª Subseção da OAB João Pessoa - PB
                </ListItem>
              </List>

              <SectionJob
                job="Advogada Rocha Marinho e Sales"
                place="João Pessoa, Paraíba"
                period="2000 - 2020"
              />

              <List>
                <ListItem>
                  Assessoria Jurídica da Associação
                </ListItem>
                <ListItem>
                  Confecção e revisão de contratos
                </ListItem>
                <ListItem>
                  Confecção e revisão de estatutos e regimentos internos
                </ListItem>
                <ListItem>
                  Redação de projetos de leis municipais para os municípios associados
                </ListItem>
                <ListItem>
                  Defesa jurídica da Associação em processos judiciais e acordos extrajudiciais
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
                course="Bacharel em Direito"
                school="UNIPE"
                place="João Pessoa, Dezembro, 2000"
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
                  Familiaridade com os sistemas, softwares e ferramentas da área;
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
                  Conhecimentos em marketing digital e uso de redes sociais;
                </ListItem>
                <ListItem>
                  Proatividade e iniciativa para resolução de problemas;
                </ListItem>
                <ListItem>
                  Domínio de diversos sistemas jurídicos para gestão processual (PJE, EPROC, ESAJ, PROJUDI, etc);
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
                  Certificação em Políticas Públicas pela Universidade Leonardo da Vinci, 2019
                </ListItem>
                <ListItem>
                  Certificação em Direitos Humanos pela Universidade Leonardo da Vinci, 2019
                </ListItem>
                <ListItem>
                  Certificação em Oratória pela Condor Blanco Internacional, 2015
                </ListItem>
              </List>
            </SectionContent>
          </Section>
        </section>
      </div>
    </main>
  )
}
