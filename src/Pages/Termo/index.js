import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity } from "react-native-web";
import Checkbox from 'expo-checkbox';
import { useNavigation } from "@react-navigation/native";


 export default function Termo(){
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();

  return (

    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.box}>
          <ScrollView>
            <Text>
            Termos de uso e aviso de privacidade
Que informações estão presentes neste documento?

Neste documento, a pessoa que utiliza os serviços do Portal do Senado Federal, aqui identificada como “usuário(a)”, encontrará informações sobre: o funcionamento do serviço e as regras aplicáveis a ele; o arcabouço legal relacionado à prestação do serviço; as responsabilidades do(a) usuário(a) ao utilizar o serviço; as responsabilidades do Senado Federal ao prover os serviços; as informações para contato, caso exista alguma dúvida ou seja necessário atualizar informações, e o meio adequado para eventuais reclamações.

Além disso, no Aviso de Privacidade, o(a) usuário(a) do serviço Portal do Senado Federal, doravante denominado simplesmente Portal, encontrará informações sobre o tratamento de dados pessoais,

notadamente quanto à forma como eles são coletados, à finalidade; à necessidade de prévio consentimento, aos dados pessoais necessários para a prestação do serviço; ao compartilhamento de dados com terceiros; às medidas de segurança implementadas para proteger os dados, à duração do tratamento de dados e a sua eliminação e à forma de tratamento do dado.

Aceitação dos termos de uso e privacidade

Ao utilizar os serviços, o(a) usuário(a) confirma que leu e compreendeu as regras aplicáveis aos serviços do Portal.

Descrição do serviço

O Senado Federal, por meio de suas unidades e serviços específicos, e com o objetivo de desempenhar suas competências e cumprir com determinações legais, realiza o tratamento de dados pessoais no atendimento de sua finalidade pública e na persecução do interesse público, observando os princípios e regras estabelecidos na Lei Geral de Proteção de Dados Pessoais (LGPD) e no Ato do Presidente do Senado Federal no 10, de 2020. Este Portal oferece informações sobre o processo legislativo e sobre a atividade parlamentar no âmbito do Senado Federal, bem como ferramentas que possibilitam a participação popular no processo legislativo, além de notícias, dados de transparência e informações administrativas, entre outros serviços.

A quem competem as decisões referentes ao tratamento de dados pessoais realizado no serviço Portal do Senado Federal (Controlador)?

Para os serviços prestados por meio do Portal do Senado, o controlador é o Senado Federal, a quem compete tomar as decisões referentes ao tratamento de dados pessoais.

Endereço: Praça dos Três Poderes s/n - Brasília-DF. CEP 70165-900. E-mail: lgpd@senado.leg.br.
Telefone: 0800 0 61 2211.

Quem é o responsável por atuar como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (Encarregado)?

No Senado Federal, o Encarregado de Dados é o servidor Pérsio Henrique Barroso. E-mail: lgpd@senado.leg.br.

Quais são as leis e normativos aplicáveis aos serviços do Portal do Senado Federal?

-Lei no 12.527, de 18 de novembro de 2011 – Lei de Acesso à Informação – Regula o acesso a informações previsto na Constituição Federal.

-Lei no 12.965, de 23 de abril de 2014 – Marco Civil da Internet – Estabelece princípios, garantias, direitos e deveres para o uso da Internet no Brasil.

-Lei no 13.709, de 14 de agosto de 2018 - Dispõe sobre o tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público ou privado, com o objetivo de proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa natural.

-Ato do Presidente do Senado Federal no 10, de 2020 - Dispõe sobre a Política Institucional de Proteção

de Dados Pessoais.

Quais são os direitos do(a) usuário(a) do serviço, de acordo com a LGPD?

- Direito de confirmação e acesso (Art. 18, I e II): é o direito de obter a confirmação de que os dados pessoais que lhe digam respeito são ou não objeto de tratamento pelo Senado Federal e, se for esse o caso, o direito de acessar os seus dados pessoais.

- Direito de retificação (Art. 18, III): é o direito de solicitar ao Senado Federal a correção de dados incompletos, inexatos ou desatualizados.

- Direito à limitação do tratamento dos dados (Art. 18, IV): é o direito de limitar o tratamento de seus dados pessoais, podendo exigir a eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na LGPD.

- Direito de oposição (Art. 18, § 2o): é o direito de, a qualquer momento, se opor ao tratamento de dados por motivos relacionados com a sua situação particular, com fundamento em uma das hipóteses de dispensa de consentimento ou em caso de descumprimento ao disposto na LGPD.

- Direito de não ser submetido a decisões automatizadas (Art. 20, LGPD): é o direito de solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais que afetem seus interesses, incluídas as decisões destinadas a definir o seu perfil pessoal, profissional, de consumo e de crédito ou os aspectos de sua personalidade.

PARA EXERCER OS SEUS DIREITOS, VOCÊ PODE ENTRAR EM CONTATO COM O SENADO FEDERAL POR MEIO DO CANAL FALE COM O SENADO:

Telefone: 0800 061 2211

Internet: https://www12.senado.leg.br/institucional/ouvidoria/form-ouvidoria-lgpd

Quais são as obrigações dos(as) usuários(as) dos serviços do Portal do Senado Federal?

O(a) usuário(a) se responsabiliza pela precisão e veracidade dos dados informados e reconhece que a inconsistência destes poderá implicar a impossibilidade de se utilizar o serviço Portal do Senado Federal.

Durante a utilização do serviço, a fim de resguardar e de proteger os direitos de terceiros, o(a) usuário(a) se compromete a fornecer somente seus dados pessoais, e não os de terceiros.

Para acesso a alguns serviços, será exigido o cadastramento prévio do(a) usuário(a). Nesses casos, o(a) usuário(a) se compromete a manter o sigilo da senha, que é pessoal e intransferível, não sendo possível, em qualquer hipótese, a alegação de uso indevido em decorrência de compartilhamento com terceiros.

O(a) usuário(a) do serviço é responsável pela atualização das suas informações pessoais, bem como pelas consequências de omissões, erros e não atualização dessas informações.

O(a) usuário(a) é responsável pela reparação de todos e quaisquer danos, diretos ou indiretos, (decorrentes de violação de quaisquer direitos de outros usuários, de terceiros, inclusive direitos de propriedade intelectual, de sigilo e de personalidade), que sua conduta cause ao Senado Federal, a qualquer outro(a) usuário(a), ou, ainda, a terceiro, inclusive em virtude do descumprimento do disposto nestes Termos de Uso e Aviso de Privacidade ou de qualquer ato praticado a partir de seu acesso ao serviço.

Quais são os deveres do Senado Federal no tratamento dos meus dados?

O Senado Federal se compromete a cumprir toda a legislação inerente ao uso correto dos dados pessoais do(a) usuário(a), de forma a preservar a privacidade dos dados utilizados no serviço, bem como a assegurar todos os direitos e garantias legais dos titulares dos dados. Ele também se obriga a

promover, independentemente de requerimentos, a divulgação – em local de fácil acesso e no âmbito de suas competências – de informações de interesse coletivo ou geral por ele produzidas ou custodiadas. É de responsabilidade do Senado Federal implementar controles de segurança para proteção dos dados pessoais dos titulares.

Quais são os direitos do Senado Federal no tratamento dos meus dados?

O Senado Federal poderá exigir validação, por e-mail, dos dados informados pelo(a) usuário(a) no cadastro, poderá coletar o endereço IP do(a) usuário(a) e suas informações de acesso à Internet, como o tipo de navegador e as páginas acessadas, poderá usar os dados coletados para melhorar os serviços prestados, enriquecer o conteúdo oferecido e enviar comunicações por e-mail; poderá usar os dados do(a) usuário(a) de forma anonimizada para elaborar relatórios para fins de estatística, melhoria dos serviços ou cumprimento de obrigação legal; poderá compartilhar suas informações com outras instituições públicas ou privadas, dentro dos limites da legislação vigente; poderá restringir a exibição ou excluir spam, abusos em comentários ou qualquer conteúdo que viole estes Termos de Uso e Aviso de Privacidade, e poderá coibir a participação de sistemas automatizados ou robôs (scripts, bots, entre outros) que tentem imitar pessoas.

Em atendimento a ordens judiciais de pedido das informações, o Senado Federal poderá compartilhar informações necessárias para investigações ou tomar medidas relacionadas a atividades ilegais, suspeitas de fraude ou ameaças potenciais contra pessoas, bens ou sistemas que sustentam o serviço ou de outra forma necessárias para cumprir suas obrigações legais.

Não é de responsabilidade do Senado Federal:

O Senado Federal não será responsabilizado pelos seguintes fatos:

a- Equipamento do(a) usuário(a) infectado ou invadido por atacantes;
b- Equipamento do(a) usuário(a) avariado no momento do consumo dos serviços;
c- Proteção insuficiente do computador do(a) usuário(a) e da rede da qual faça parte;
d- Proteção insuficiente das informações armazenadas nos computadores do(a) usuário (a);
e- Uso indevido de equipamentos do(a) usuário(a) por terceiros
f- Monitoração clandestina do computador do(a) usuário(a);
g- Vulnerabilidades ou instabilidades existentes nos sistemas do(a) usuário(a);
O Senado Federal não será responsabilizado pela instalação de códigos maliciosos (vírus, trojans, malwares, keyloggers, worm, bot, backdoor, spyware, rootkit, ou de quaisquer outros que venham a ser criados) no equipamento do(a) usuário(a) ou de terceiros em decorrência da navegação na Internet pelo(a) próprio(a) usuário(a). O Senado Federal também não se responsabiliza por eventuais conteúdos de de terceiros citados e hospedados no Portal, nem por comentários e opiniões de usuários publicados neste sítio.

Quais são as responsabilidades do Senado Federal no tratamento dos meus dados?

O Senado Federal se compromete a cumprir toda a legislação inerente ao uso correto dos dados pessoais do(a) usuário(a), de forma a preservar a privacidade dos dados utilizados no serviço, bem como a assegurar todos os direitos e garantias legais dos titulares dos dados. Ele também se obriga a promover, independentemente de requerimentos, a divulgação – em local de fácil acesso e no âmbito de suas competências – de informações de interesse coletivo ou geral por ele produzidas ou custodiadas. É de responsabilidade do Senado Federal implementar controles de segurança para proteção dos dados pessoais dos titulares.

Em atendimento a ordens judiciais de pedido das informações, o Senado Federal poderá compartilhar informações necessárias para investigações ou tomar medidas relacionadas a atividades ilegais, suspeitas de fraude ou ameaças potenciais contra pessoas, bens ou sistemas que sustentam o serviço ou de outra forma necessárias para cumprir suas obrigações legais.

AVISO DE PRIVACIDADE

Este Aviso de Privacidade foi elaborado em conformidade com a legislação e poderá ser atualizado em decorrência de eventual alteração normativa, razão pela qual o(a) usuário(a) deve acessá-lo periodicamente.

O Senado Federal se compromete a cumprir as normas previstas na Lei Geral de Proteção de Dados Pessoais (LGPD) e a respeitar os princípios dispostos em seu Art. 6o.

Quais dados pessoais são tratados pelo Senado Federal?

A utilização, pelo(a) usuário(a), de determinadas funcionalidades dos serviços oferecidos pelo Senado Federal poderá depender do tratamento de alguns dados pessoais, observada a finalidade e a necessidade. Cada serviço informará em sua página, de modo individualizado, quais dados serão necessários para sua utilização, a exemplo do nome completo, sexo, nacionalidade, filiação, endereço, telefone, número de inscrição no Cadastro de Pessoas Físicas (CPF), endereço de e-mail, dados do dispositivo móvel (modelo de hardware, sistema operacional), localização do(a) usuário(a), registro de acesso etc. Para acessar os termos de uso ou de consentimento de cada serviço, siga os links na página dos termos de uso do portal do Senado Federal.

Como os dados são coletados?

Os dados referentes a nome, sexo, nacionalidade, filiação, endereço, telefone, número de inscrição no CPF e endereço de e-mail são informados pelo(a) usuário(a). Os dados do dispositivo móvel, a localização e o registro de acesso são coletados diretamente do dispositivo.

Para que fim utilizamos seus dados?

Conforme o serviço a ser acessado, seus dados podem ser utilizados para diferentes finalidades. Cada serviço oferecido pelo Senado Federal trará, em sua página própria, informações sobre a finalidade e sobre a necessidade do tratamento dos dados.

Qual o tratamento realizado com os dados pessoais?

O tratamento realizado pelo Senado Federal compreende toda operação realizada com dados pessoais, como a coleta, a produção, a recepção, o acesso, a transmissão, a utilização, a modificação, o armazenamento, a avaliação, a classificação, a comunicação, o controle, o processamento, a difusão, a extração e a eliminação.

Por quanto tempo seus dados serão armazenados?

Cada unidade ou serviço do Senado Federal que realiza tratamento de dados pessoais disponibilizará as informações sobre o tratamento, a partir do momento da coleta, preferencialmente em seu portal na Internet, informando, de forma clara e atualizada, a previsão legal, a finalidade, os procedimentos e as práticas de execução utilizadas. O prazo de tratamento de seus dados pessoais será informado em cada um dos Termos de Uso específicos do serviço acessado. Como regra geral, e ressalvado o cumprimento de exigência legal, os dados pessoais serão eliminados após o cumprimento da finalidade a qual estiverem vinculados.

Os dados pessoais utilizados no serviço são compartilhados?

Os dados pessoais do(a) usuário(a) poderão ser compartilhados em casos de execução descentralizada de atividade pública, nos casos em que os dados forem acessíveis publicamente, quando houver

previsão legal ou a transferência for respaldada em contratos, convênios ou instrumentos congêneres, e ainda para prevenir fraudes ou resguardar a segurança e a integridade do titular dos dados pessoais, sempre nos limites legais e vedado o tratamento para outras finalidades.

Segurança no tratamento dos dados pessoais do(a) usuário(a)

O Senado Federal se compromete a aplicar as medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, alteração, comunicação ou difusão de tais dados.

No entanto, exime-se de responsabilidade por culpa exclusiva de terceiros, como em caso de ataque de hackers ou crackers, ou culpa exclusiva do(a) usuário(a), como no caso em que ele(a) mesmo(a) transfere seus dados a terceiros.

O Senado Federal se compromete, ainda, a comunicar ao(à) usuário(a), em prazo adequado, a ocorrência de qualquer incidente de segurança que apresente risco potencial a seus direitos e liberdades pessoais. Considera-se incidente de segurança de dados pessoais toda ação ou omissão que provoque, de modo acidental ou ilícito, a destruição, a perda, a alteração, a divulgação ou o acesso não autorizado a dados pessoais tratados pelo Senado Federal.

O Portal do Senado Federal utiliza cookies?

Não, o Portal do Senado Federal não utiliza cookies.

Estes Termos de Uso e o Aviso de Privacidade podem ser alterados?

Sim. O Senado Federal se reserva o direito de modificar estas normas a qualquer momento,

especialmente para adaptá-las às evoluções do Portal do Senado Federal ou dos serviços prestados pelo Senado Federal, seja pela disponibilização de novas funcionalidades, seja pela supressão ou modificação daquelas já existentes.

Qualquer alteração e/ou atualização destes Termos de Uso e Aviso de Privacidade passará a vigorar a partir da data de sua publicação no sítio do serviço e deverá ser integralmente observada pelos(as) usuários(as).

Os Termos de Uso e a Aviso de Privacidade foram atualizados pela última vez em: 20/12/2021.

Qual o meio adequado para realizar alguma reclamação?

Sem prejuízo de qualquer outra via de recurso administrativo ou judicial, os(as) titulares de dados pessoais têm direito a apresentar reclamação à Autoridade Nacional de Proteção de Dados.
            </Text>
          </ScrollView>
        </View>
        <View style={styles.TextTermo}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <View>
          <Text style={styles.paragraph}>
            Termos de Uso!
          </Text>
        </View>
      </View>
      </View>

      <View style={styles.ConcordaEdiscorda}>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
          <View>
            <Text style={styles.TextConcorda}>
              Concordo
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
          <View>
            <Text style={styles.TextNaoConcorda}>
              Não Concordo
            </Text>
          </View>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',


  },
  box: {

    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
    height: 500,
    width: 400,
    alignItems: 'center',
    borderRadius: 30,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  section: {
    marginTop: 20,
    flexDirection: '',
    alignItems: 'center',
  },
  paragraph: {
    color: '#fff',
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },

  ConcordaEdiscorda: {
    flexDirection: 'row'
  },

  botao: {
    height: 40,
    width: 150,
    borderRadius: 10,
    backgroundColor: "#4F4F4F",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  TextConcorda: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'

  },
  TextNaoConcorda: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  TextTermo:{
    marginTop: 10,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center'
  }
})


