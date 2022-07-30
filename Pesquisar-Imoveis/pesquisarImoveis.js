/*
Autores: Henrique Galvão, Paulo Cezar Borges, Samir Coutinho Borges
Data: 28/07/2022
Descrição: Javascript da página de pesquisar imóveis, aplicando os filtros necessários.
*/
var tipo = ['Apartamento', 'Casa', 'Loja', 'Loja', 'Apartamento', 'Apartamento', 'Apartamento', 'Casa', 'Loja', 'Loja', 'Terreno', 'Loja', 'Loja', 'Apartamento', 'Apartamento', 'Apartamento', 'Casa', 'Loja', 'Terreno', 'Terreno', 'Apartamento', 'Apartamento', 'Loja', 'Terreno', 'Apartamento', 'Apartamento', 'Apartamento', 'Loja', 'Casa', 'Duplex', 'Casa', 'Loja', 'Loja', 'Casa', 'Casa', 'Duplex', 'Loja', 'Terreno', 'Loja', 'Sítio', 'Casa', 'Apartamento', 'Loja', 'Apartamento', 'Apartamento', 'Apartamento', 'Duplex', 'Loja', 'Loja', 'Terreno', 'Terreno', 'Apartamento', 'Apartamento', 'Loja', 'Terreno', 'Terreno', 'Terreno', 'Apartamento', 'Apartamento', 'Terreno', 'Casa', 'Casa', 'Loja', 'Apartamento', 'Loja', 'Loja', 'Casa', 'Loja', 'Duplex', 'Apartamento', 'Casa', 'Terreno', 'Apartamento', 'Duplex', 'Loja', 'Terreno', 'Casa', 'Casa', 'Loja', 'Apartamento', 'Apartamento', 'Casa', 'Casa', 'Terreno', 'Casa', 'Terreno', 'Loja', 'Casa', 'Apartamento', 'Casa', 'Loja', 'Casa', 'Loja', 'Loja', 'Loja', 'Terreno', 'Casa', 'Duplex', 'Sítio', 'Apartamento', 'Casa', 'Apartamento', 'Casa', 'Terreno', 'Casa', 'Casa', 'Loja', 'Apartamento', 'Duplex', 'Apartamento', 'Loja', 'Apartamento', 'Apartamento', 'Casa', 'Loja', 'Duplex', 'Duplex', 'Loja', 'Loja', 'Terreno', 'Loja', 'Terreno', 'Loja', 'Terreno', 'Loja', 'Loja', 'Apartamento', 'Terreno', 'Apartamento', 'Casa', 'Casa', 'Apartamento', 'Apartamento', 'Apartamento', 'Loja', 'Loja', 'Loja', 'Loja', 'Apartamento', 'Casa', 'Apartamento', 'Apartamento', 'Loja', 'Loja', 'Duplex', 'Apartamento', 'Duplex', 'Loja', 'Casa', 'Terreno', 'Loja', 'Loja', 'Apartamento', 'Apartamento', 'Casa', 'Casa', 'Terreno', 'Loja', 'Sítio', 'Duplex', 'Apartamento', 'Apartamento', 'Apartamento', 'Casa', 'Casa', 'Loja', 'Loja', 'Apartamento', 'Casa', 'Loja', 'Loja', 'Casa', 'Loja', 'Loja', 'Apartamento', 'Apartamento', 'Loja', 'Apartamento', 'Casa', 'Sítio', 'Casa', 'Loja', 'Terreno', 'Casa', 'Apartamento', 'Apartamento', 'Loja', 'Terreno', 'Apartamento', 'Casa', 'Sítio', 'Casa'];

var imagens = ['apartamento001', 'casa001', 'loja001', 'loja002', 'apartamento002', 'apartamento003', 'apartamento004', 'casa002', 'loja003', 'loja004', 'terreno001', 'loja005', 'loja006', 'apartamento005', 'apartamento006', 'apartamento007', 'casa002', 'loja007', 'terreno002', 'terreno003', 'apartamento008', 'apartamento009', 'loja008', 'terreno004', 'apartamento010', 'apartamento011', 'apartamento012', 'loja009', 'casa003', 'duplex001', 'casa004', 'loja010', 'loja011', 'casa005', 'casa006', 'duplex002', 'loja012', 'terreno005', 'loja013', 'sitio001', 'casa007', 'apartamento013', 'loja014', 'apartamento014', 'apartamento015', 'apartamento016', 'duplex003', 'loja015', 'loja016', 'terreno006', 'terreno007', 'apartamento017', 'apartamento018', 'loja017', 'terreno008', 'terreno009', 'terreno010', 'apartamento019', 'apartamento020', 'terreno011', 'casa008', 'casa009', 'loja018', 'apartamento021', 'loja019', 'loja020', 'casa010', 'loja021', 'duplex004', 'apartamento022', 'casa011', 'terreno012', 'apartamento023', 'duplex005', 'loja022', 'terreno013', 'casa012', 'casa013', 'loja023', 'apartamento024', 'apartamento025', 'casa014', 'casa015', 'terreno014', 'casa016', 'terreno015', 'loja024', 'casa017', 'apartamento026', 'casa018', 'loja025', 'casa019', 'loja026', 'loja027', 'loja028', 'terreno016', 'casa020', 'duplex006', 'sitio002', 'apartamento027', 'casa021', 'apartamento028', 'casa022', 'terreno017', 'casa023', 'casa024', 'loja029', 'apartamento029', 'duplex007', 'apartamento030', 'loja030', 'apartamento031', 'apartamento032', 'casa025', 'loja031', 'duplex008', 'duplex009', 'loja032', 'loja033', 'terreno018', 'loja034', 'terreno019', 'loja035', 'terreno020', 'loja036', 'loja037', 'apartamento033', 'terreno021', 'apartamento034', 'casa026', 'casa027', 'apartamento035', 'apartamento036', 'apartamento037', 'loja038', 'loja039', 'loja040', 'loja041', 'apartamento038', 'casa028', 'apartamento039', 'apartamento040', 'loja042', 'loja043', 'duplex010', 'apartamento041', 'duplex011', 'loja044', 'casa029', 'terreno022', 'loja045', 'loja046', 'apartamento042', 'apartamento043', 'casa030', 'casa031', 'terreno023', 'loja047', 'sitio003', 'duplex012', 'apartamento044', 'apartamento045', 'apartamento046', 'casa032', 'casa033', 'loja048', 'loja049', 'apartamento047', 'casa034', 'loja050', 'loja051', 'casa035', 'loja052', 'loja053', 'apartamento048', 'apartamento049', 'loja054', 'apartamento050', 'casa036', 'sitio004', 'casa037', 'loja055', 'terreno024', 'casa038', 'apartamento051', 'apartamento052', 'loja056', 'terreno025', 'apartamento053', 'casa039', 'sitio005', 'casa040'];

var areaC = [122, 181, 161, 151, 107, 95, 187, 107, 108, 123, 0, 167, 152, 197, 108, 142, 119, 190, 0, 0, 114, 160, 140, 0, 184, 87, 194, 144, 91, 114, 124, 85, 117, 123, 100, 140, 126, 0, 115, 91, 173, 164, 172, 125, 183, 142, 121, 151, 162, 0, 0, 108, 150, 102, 0, 0, 0, 184, 94, 0, 195, 123, 198, 134, 135, 113, 182, 116, 194, 89, 197, 0, 137, 108, 187, 0, 93, 113, 181, 181, 130, 91, 88, 0, 89, 0, 190, 145, 132, 119, 163, 130, 125, 87, 127, 0, 80, 163, 174, 146, 153, 100, 186, 0, 174, 118, 106, 149, 82, 93, 193, 170, 129, 144, 151, 139, 136, 164, 162, 0, 92, 0, 129, 0, 186, 200, 141, 0, 129, 123, 161, 94, 146, 82, 140, 139, 177, 161, 138, 178, 86, 80, 142, 83, 186, 179, 127, 153, 198, 0, 95, 178, 138, 154, 195, 154, 0, 81, 130, 103, 86, 85, 185, 93, 112, 120, 161, 177, 159, 94, 126, 167, 176, 115, 92, 185, 122, 181, 157, 107, 88, 199, 0, 150, 142, 134, 83, 0, 151, 179, 182, 100];

var areaT = [122, 218, 194, 151, 107, 95, 200, 140, 119, 148, 251, 201, 168, 197, 108, 142, 191, 209, 188, 293, 114, 160, 168, 149, 184, 87, 194, 159, 101, 183, 137, 85, 129, 210, 120, 210, 126, 169, 115, 1229, 208, 164, 207, 125, 183, 142, 206, 182, 162, 131, 199, 108, 150, 113, 156, 195, 168, 184, 94, 204, 371, 185, 218, 134, 149, 113, 182, 128, 194, 89, 355, 173, 137, 184, 225, 189, 140, 170, 181, 181, 130, 146, 168, 273, 178, 254, 228, 290, 132, 119, 180, 221, 150, 87, 127, 275, 120, 310, 2379, 146, 276, 100, 186, 160, 331, 142, 128, 149, 107, 93, 193, 170, 129, 288, 167, 167, 177, 197, 162, 219, 102, 237, 142, 268, 205, 200, 141, 147, 129, 160, 242, 94, 146, 82, 154, 139, 177, 161, 138, 267, 86, 80, 157, 100, 205, 179, 140, 169, 396, 248, 95, 214, 138, 154, 293, 247, 286, 98, 2760, 134, 86, 85, 185, 177, 180, 132, 161, 177, 303, 104, 139, 184, 176, 127, 92, 185, 147, 181, 220, 4410, 132, 199, 123, 225, 142, 134, 92, 236, 151, 179, 3240, 150];

var logradouro = ['Rua João Marcon, 283 - 0', 'AV: BARÃO DO RIO BRANCO, 13 - CASA', 'AVENIDA BRASIL, 499', 'RUA RENO CARDOSO, 171', '940 - Prédio', 'RUA Praça Raquel Gouch, 535 - Prédio', 'RUA MONSENHOR VITOR ASSUITE, 2004', 'RUA MARIA HELENA, 55', 'Centro', 'Rua Oito, 686', 'R. Angelo Sereghetti, 566', 'Rua Vitorio Tafarello, 578', 'RUA LAZARO CLETO, 1-43', 'Rua Padre Caetano Jovino, 421', 'AV. ARMANDO COLANGELO, 1584', 'Avenida Alfeu Gonçalves Belchior, 75', 'Avenida da Saudade, 510', 'ESTRADA DA CAPELA, 2650', 'RUA OTAVIANO DA SILVA GUIDIO, 290', 'RUA JOSE VICENTE DOS SANTOS, 666', 'Rua Antonio Cunha Leite, 3209', 'VIA SEBASTIAO ANTONIO DA SILVA, 260', 'Joaquim Ribeiro Porto, 91', 'RUA SUELI LAZARA BERNARDINO, 121', 'Rua Uirapuru, 75', 'RUA ELOY RICCI, 236', 'Cunha Bueno, 290 - Casa', 'RUA JOÃO PAPIN, 793', 'RUA ABRAHAO MARTINI, 51', 'Avenida da Saudade, s/n', 'RUA CORINTHO LUIZ DONOFRIO, 25', 'Rua Barra da Forquilha, 300', 'GUIMARAES, 792', 'RUA SETE DE SETEMBRO, 868', 'ESTRADA DA BRAGANTINA, 1871', 'Rua Maria Felícia Gonçalves, 256', 'RUA OLAVO BILAC, 716', 'RUA JOSE PRETTI, 260', 'Paulista, 1060', 'RUA JOÃO BATISTA MÓDOLO, 548', 'Avenida Paulo Diogo Valim, 3', 'Rua São Luiz, 116', 'RUA GENERAL OSÓRIO, 333 - PREDIO', 'AVENIDA JOÃO PESSOA, 1630', 'Rua Um, 501', 'AVENIDA ITALO ADAMI, 2170', 'MENDONÇA, 275 - CASA', 'Avenida Eliseu Correa Dias, 104', 'Rua Gustavo Martins Cerqueira, 321 - B', 'Geraldo Caetano, 98', 'AV. RUI BARBOSA, 697 - PRÉDIO', 'RUA QUINTINO BOCAIUVA, 445', 'Rua Pedro Silva, 145 - CASA', 'Rua Maranhão, 1595', 'Rua Carlos Vassalo, 370', 'RUA JOSÉ BONIFÁCIO, 636', 'Etori Capelari, 27', 'RUA JOSE DE CASTRO, 45', 'RUA DEMERVAL DA S. PEREIRA, s/nº', 'Veiga, 514', 'Avenida dos Expedionários, 1916', 'Av: Bandeirantes, 270', 'ESTRADA DA VARGEM GRANDE, 95', 'RUA RIO DE JANEIRO, 139', 'Rua Luiza Rizzo Pesente, 309', 'RUA FERNANDO PINHEIRO FRANCO, 122', 'CARRARO, 333', 'Avenida Luiz Ribeiro Filho, 402', 'RUA FILIPPO, 101', 'Rua Elza Feres, 360', 'Avenida Tiradentes, 628', 'RUA AFONSO MONTEIRO DA CRUZ, s/n', 'RUA FELICIO ROSSI, 153', 'Térreo', 'RUA VALINS, 746', 'RUA FONTOURA XAVIER, 695 - TÉRREO', 'Rua Dos Lirios, S/N', 'RUA TEREZA MARIA FERREIRA, 164', 'RUA DOS ALIADOS, 1315 - PRÉDIO', 'AVENIDA CARLOS FERNANDES, 1215', 'RUA AUGUSTA MAGRINI SANITA, 117', 'RUA BORBA GATO, 156', 'Rua das Peróbas, 114', 'RUA DOS CRAVOS, 339', 'RUA PASTOR JOSE DUTRA DE MORAES, 99', 'Rua Ribeirão Preto, 17', 'RUA BRUNO CILURZO, 1550', 'Rua Mario Reis, 183', 'RUA ALCIDES RODRIGUES PONTES, 44', 'Albuquerque, 289', 'RUA JOSE DOMINGUES FERREIRA, 53', 'RUA MEM DE SA, 605', 'RUA DOZITO MALVAR RIBAS, 5171', 'RUA JOSE MANDRA, 98', 'ESTRADA DOM JOAO NERY, 54/58', 'Rua Santa Cruz, 1197', 'RUA CAETANO VIDOTTO, 231', 'RUA QUIRILO RAVAGNANI, 259', 'Guilherme G F Campanha, 673 - fundos', 'ALAMEDA CANUTO DO PITO, 870', 'Rua Carlos Martins Fontes, 2279', 'RUA PEDRO PAVANELLI, 40', 'Rua Orlando Candido de Lara, 126', 'RUA MANOEL DOS SANTOS CALADO, 300', 'Rua José Rodrigues de Oliveira, 145', 'Avenida XV de Novembro, 275', 'RUA ALAGOAS, 327', 'Rua Sete de Setembro, 76 - Casa', 'RUA 6, 1085', 'RUA ZEFERINO DE LIMA, 491', 'Rua Nilo Peçanha, 544', 'Av. Brasil/Japão, 1671', 'RUA JONAS DE SOUZA, S/Nº', 'RUA CAPIVARI, 405', 'AVENIDA AGUAI, AVENIDA AGUAÍ', 'Rua: Virgílio Fioroto, 362', 'Rua Águas de Lindóia, 425', 'Rua Alzira Nazareth, 399', 'Rodovia Prefeito João Zacchi, 6831', 'RUA EMILIO DE MENEZES, 150', 'Avenida Tiradentes, 586', 'PRAÇA NOVE DE JULHO, s/nº', 'Avenida Presidente Vargas, 118', 'Avenida Doutor Albert Einstein, 1144', 'Rua: Romeu Brito, 475', 'Rua Domingos Rodrigues Mendes, s/n', 'RUA SANTA TEREZINHA, 297', 'Rua Luiza Motta, 463 - Casa', 'RUA: SANTA BRANCA, 14/17', 'Rua Tião Carreiro, 20', 'Rua Monsenhor Marcilio Genoni, 450', 'RUA DONA LUISA DE GUSMAO, 2200', 'RUA Antônio Facco, 598', 'Rua Antonio Buzinaro,, 120 - casa', 'Oliveira, 150 - A', 'RUA MENDES PIMENTEL, 45', 'RUA VEREADOR OTÁVIO DA COSTA, S;N', 'Rua Cataguases, 493', 'Avenida Salvador Pagano, 190', 'Rua. Praça da Independencia, 140', 'RUA LASAR SEGAL, 110', 'AVENIDA PACAEMBU, 11', 'RUA FEIJÓ, 153', 'Praça Irineia Figueredo Barbosa, 001', 'Rua prudente de Moraes, 306', 'ALVARES, 3054', 'RUA URIAS AVELINO DE MORAES, 921', 'Rua Frei Cufine Pietro, 212', 'Avenida Remo Frontarolli, 16', 'Rua Marta Garcia de Oliveira, 35', 'FERNANDES, 422', 'Rua Alves de Miranda, 30 - Casa', 'Av. Padroeira, s/n', 'Rua dos Cravos, 217', 'AVENIDA 21, 1264', 'AVENIDA RECIFE, 1038', 'RUA MARECHAL DEODORO, 153', 'Avenida Manoel Vieira, 780', 'JOSÉ OMETTO, 200', 'RUA José de Oliveira Galindo, 290', 'RUA PERNAMBUCO, 105', 'Avenida 05, 310', 'RUA CAMBUI, 279', 'Rua Josepha Maria de Jesus, 11', 'Rua Felicio Falco, 107', 'Rua Francisco Bertone, 27 - casa', 'Rua Francisco Coneglian, 137', 'Av. Todos os Santos, 220', 'AVENIDA SERGIPE, 690', 'Rua Dulcina Bartolomeu Hoppe, 78', 'Avenida Parana, s/n', 'Rua Dom Pedro II, 565', 'Rua Sargento Euber Queiroz, 113', 'Avenida Dona Ricardina, 589', 'Rua Lázaro Aranha do Amaral, 268', 'Vieira de Goes, 340', 's/nº', 'SILVA, 395', 'RUA GETULIO MOREIRA DE SOUZA, 30', 'RUA THOMAS CENEVIVA NETTO, 391', 'rua Castro Alves, 540', 'RUA CAPITÃO JOÃO TERRA, 800', 'Rua Paulo Limoeiro, 383', 'RUA ANTURIO, 200', 'AVENIDA ELDORADO, 25 E 29', 'RUA NOVA AURORA, 549', 'RUA FRANCISCO FERREIRA PINTO, 385', 'RUA JOÃO ANTONIO DE CASTILHO, 00', 'RUA Hairton Rodrigues do Prado, 47', 's/nº', 'RUA PEREIRA BARRETO, 289', 'AVENIDA DOIS, 30'];

var bairro = ['Senhora das Graças', 'CENTRO', '(NOVA VENEZA)', 'VILA RICA', 'Centro', 'CENTRO', 'Benfica', 'CENTRO', 'Centro', 'centro', 'Centro', 'KM 18', 'CANDIDA', 'Bairro Velho', 'Barreto', 'Jardim Maria Luiza', 'Jardim Bela Vista', 'CAPELA', 'CONEGO NAZARENO', 'MASSAGUACU', 'Portão', 'JD ALVORADA', 'Centro', 'CENTRO', 'Pássaros', 'VILA BANDEIRANTES', 'Centro', 'JARDIM BRASIL III', 'FIGUEIRAS', 'Vila Mariana', 'GOMES', 'Jardim Panamericano', 'JARDIM CLAUDIA II', 'CENTRO', 'HABITACIONAL SAO', 'IPÊS', 'ANTONIO', 'JOAO CORRADINI', 'Jardim Caiçara', 'CENTRO', 'zequinha amêndola', 'CENTRO', 'CENTRO', 'PEDREGULHO', 'Vicente de Carvalho', 'VILA URSULINA', 'CENTRO', 'Horizonte', 'Centro', 'Paineiras', 'CENTRO', 'CENTRO', 'CENTRO', 'São Benedito', 'São Jerônimo', 'CENTRO', 'cohab', 'ILHA CARAGUATÁ', 'ESPERANCA', 'CENTRO', 'Barbosas', 'Jd. Europa', 'VILA PALMARES', 'CIDADE INTERCAP', 'Vila dos Pinheiros', 'CENTRO', 'ESTELA AZEVEDO', 'Dei', 'VILA MARIANA', 'Vila Sônia', 'Centro', 'SERRARIA', 'NOGUEIRA', 'Jardim Peri Peri', 'CENTRO', 'ITAQUERA', 'Jardim Primavera', 'SÃO FRANCISCO', 'CENTRO', 'CENTRO', 'CENTRO', 'VILA THOMAZINA', 'Jardim das Palmeiras', 'VILA NATAL', 'DISTRITO INDUSTRIAL ANTONIO ZACARO', 'Chaçará São João', 'JARDIM DERMÍNIO', 'Centro', 'PARQUE PAYOL 1', 'Novo Cosmópolis', 'GARCIA', '(CAUCAIA DO ALTO)', 'CENTRO', 'JOÃO LUIZ DE VICENTE', 'VILA SILVA TELES', 'Jardim Santa Libânia', 'RUBIÃO JUNIOR', 'SÃO DOMINGOS', 'Jose Tonon', 'PARQUE FRIBURGO I', 'Centro', 'JARDIM SANTA MARIA', 'centro', 'ANTONIO FRANCISCO', 'Jardim Avenida', 'Centro', 'CENTRO', 'Centro', 'CENTRO', 'CENTRO', 'Centro', 'Três Lagoinhas', 'JARDIM REAL', 'VILA REAL', 'VILA ANTUNES', 'CDHU I', 'Jardim Rochdale', 'Vila Mariana', 'Bonfim', 'VILA XAVIER', 'CENTRO', 'Distrito de Tibiriçá', 'Centro', 'Parque São Paulo', 'Livramento', 'Jardim Europa', 'CENTRO', 'Centro', 'SANTA TEREZA', 'Vila União III', 'Centro', 'VILA NOGUEIRA', 'CENTRO', 'Centro', 'Centro', 'RECANTO SUAVE', 'CENTRO', 'Cristais', 'Jardim das Acácias', 'Calegari', 'JARDIM FLORENCE', 'MATA', 'CENTRO', 'Jdim Paulista', 'Promissão', 'LIMAO', 'CESAR DE ALMEIDA', 'Vila São João', 'Hortências', 'Jd. Eldorado', 'Centro', 'centro', 'Padroeira', 'Jardim Eldorado', 'CECAP', 'VINTE', 'CENTRO', 'centro', 'CENTRO', 'Centro', 'CENTRO', 'COHAB 01', 'SALERNO', 'Senhora de Lourdes', 'Vila Sao Joao', 'Jardim Bela Vista', 'Centro', 'Jardim Santa Luisa', 'INDAIA', 'Santo Antonio', 'Jardim Brasil', 'Vila Recreio', 'Maranduba', 'Centro', 'Parque Cecap I', 'Jardim São Rafael I', 'HABITACIONAL CHICO', 'CENTRO', 'CASA BRANCA', 'CENTENARIO', 'Centro', 'CENTRO', 'Vila Brás', 'INDEPENDENCIA', 'VILA GEPINA', 'JARDIM MUTINGA', 'CENTRO', 'CENTRO', 'Centro', 'JARDIM CAMPO BELO', 'BRIGIDA', 'CENTRO'];

var cidade = ['Boituva', 'Florínea', 'Sumaré', 'Suzano', 'General Salgado', 'Macedônia', 'Andradina', 'Carapicuíba', 'Ubarana', 'Riolândia', 'Anhumas', 'Osasco', 'Bauru', 'Itararé', 'Arujá', 'Araraquara', 'Balbinos', 'Vinhedo', 'Ipaussu', 'Caraguatatuba', 'Atibaia', 'Castilho', 'Viradouro', 'Anhembi', 'Cerqueira César', 'Itu', 'Bento de Abreu', 'Campos', 'Valinhos', 'Borborema', 'Itu', 'São Paulo', 'Bebedouro', 'Itaí', 'Paulista', 'Platina', 'Francisco Morato', 'Itatiba', 'Barretos', 'Itaju', 'Barretos', 'Arapeí', 'Magda', 'Guaratinguetá', 'Bertioga', 'Itaquaquecetuba', 'Canitar', 'Perdões', 'Urupês', 'Artur Nogueira', 'Planalto', 'Pirajuí', 'Iporanga', 'Americana', 'Americana', 'Sales Oliveira', 'Bofete', 'Cubatão', 'Campinas', 'Coronel Macedo', 'Arujá', 'Sales', 'Franco da Rocha', 'Taboão da Serra', 'Caieiras', 'Poá', 'Carapicuíba', 'Araraquara', 'Aparecida', 'Taboão da Serra', 'Borebi', 'Diadema', 'Vinhedo', 'São Paulo', 'Aguaí', 'São Paulo', 'Onda Verde', 'Aparecida', 'Guarani dOeste', 'Ipuã', 'Poloni', 'Paulista', 'Nova Odessa', 'Cubatão', 'Catanduva', 'Amparo', 'Franca', 'Oriente', 'Jesus', 'Cosmópolis', 'Piraju', 'Cotia', 'Itirapuã', 'Brodowski', 'São Paulo', 'Paulista', 'Botucatu', 'Sumaré', 'Bocaina', 'Mairiporã', 'Dirce Reis', 'Tupã', 'Óleo', 'Avaré', 'Salto de Pirapora', 'Araçatuba', 'Álvares Florence', 'Itaoca', 'Guaíra', 'Tuiuti', 'Tanabi', 'Mairinque', 'Cubatão', 'Várzea Paulista', 'Cajati', 'Olímpia', 'Osasco', 'Garça', 'Cabreúva', 'Assis', 'Indiana', 'Bauru', 'Flórida Paulista', 'Araraquara', 'Buritama', 'Agudos', 'Guarantã', 'Ariranha', 'Serra', 'Campinas', 'Maracaí', 'Campinas', 'Inúbia Paulista', 'Guaiçara', 'Alambari', 'Cotia', 'Barra do Turvo', 'Caconde', 'Cravinhos', 'Marapoama', 'Campinas', 'Franco da Rocha', 'Guaratinguetá', 'Orindiúva', 'Diadema', 'São Paulo', 'Marília', 'Salto Grande', 'Araraquara', 'Pirangi', 'do Sul', 'Barra do Chapéu', 'Osasco', 'Cordeirópolis', 'Guaíra', 'Francisco Morato', 'Bárbara', 'Serra', 'Iracemápolis', 'Caiabu', 'Rodrigues', 'Colina', 'Sumaré', 'Águas da Prata', 'Itupeva', 'Pitangueiras', 'Lupércio', 'Batatais', 'Caraguatatuba', 'Capivari', 'Amparo', 'Barrinha', 'Ubatuba', 'Barbosa', 'Araraquara', 'Araraquara', 'Campinas', 'Mariápolis', 'Suzano', 'Bebedouro', 'Rubinéia', 'Aramina', 'Pirassununga', 'Salto', 'Itaquaquecetuba', 'Barueri', 'Novais', 'Glicério', 'Paulista', 'Campinas', 'Carapicuíba', 'Analândia'];

var CEP = ['18550-000', '19870-000', '13177-050', '08625-570', '15300-000', '15620-000', '16900-467', '06320-070', '15225-000', '15495-000', '19580-000', '06192-150', '17057-662', '18460-000', '07400-000', '14805-260', '16640-000', '13280-000', '18950-000', '11677-123', '12948-110', '16920-000', '14740-000', '18620-000', '18760-000', '13313-201', '16790-000', '18960-000', '13275-615', '14955-000', '13311-220', '02993-000', '14708-200', '18730-000', '13232-297', '19990-000', '07914-060', '13251-563', '14781-271', '17260-000', '14781-208', '12870-000', '15310-000', '12511-220', '11250-000', '08574-020', '18990-000', '12955-000', '15850-000', '13160-000', '15260-000', '16600-000', '18330-000', '13476-735', '13469-710', '14660-000', '18590-000', '11535-010', '13082-624', '18745-000', '07400-000', '14980-000', '07863-000', '06757-290', '07718-055', '08550-240', '06396-000', '14806-309', '12570-000', '06765-450', '18675-000', '09980-550', '13280-000', '05537-070', '13860-000', '08295-300', '15450-000', '12570-000', '15680-000', '14610-000', '15160-000', '13230-400', '13460-000', '11538-040', '15808-305', '13905-714', '14406-523', '17570-000', '06550-000', '13150-000', '18800-000', '06726-110', '14420-000', '14340-000', '08110-000', '12904-001', '18600-000', '13180-000', '17240-000', '07600-000', '15715-000', '17602-045', '18790-000', '18708-800', '18160-000', '16010-030', '15540-000', '18360-000', '14790-000', '12930-000', '15170-000', '18120-000', '11543-730', '13222-141', '11950-000', '15400-000', '06223-160', '17400-000', '13315-000', '19802-100', '19560-000', '17110-000', '17830-000', '14811-500', '15290-000', '17120-000', '16570-000', '15960-000', '09450-000', '13060-708', '19840-000', '13088-028', '17760-000', '16430-000', '18220-000', '06702-655', '11955-000', '13770-000', '14140-000', '15845-000', '13059-016', '07810-000', '12500-320', '15480-000', '09960-500', '02546-000', '17511-830', '19920-000', '14808-518', '11582-000', '14930-000', '18325-000', '06162-215', '13490-000', '14790-000', '07941-020', '18770-000', '18190-000', '13495-000', '19530-000', '15930-000', '14770-000', '13178-341', '13890-000', '13295-000', '14750-000', '17420-000', '14300-000', '11665-190', '13360-000', '13902-230', '14860-000', '11680-000', '16350-000', '14808-200', '14810-822', '13054-532', '17810-000', '08663-300', '14711-540', '15790-000', '14550-000', '13632-010', '13321-540', '08577-020', '06425-120', '15885-000', '16270-000', '12630-000', '13053-124', '06333-330', '13550-000'];


//Referências aos elementos do HTML
var inAreaMinima = document.getElementById("inAreaMinima");
var inAreaMaxima = document.getElementById("inAreaMaxima");

var cbApartamento = document.getElementById("cbApartamento");
var cbCasa = document.getElementById("cbCasa");
var cbSitio = document.getElementById("cbSitio");
var cbLoja = document.getElementById("cbLoja");
var cbDuplex = document.getElementById("cbDuplex");
var cbTerreno = document.getElementById("cbTerreno");

var inBairro = document.getElementById("inBairro");
var inCidade = document.getElementById("inCidade");

var btFiltrar = document.getElementById("btFiltrar");
var btLimpar = document.getElementById("btLimpar");


function carregarNovosImoveis() {
    if (localStorage.cidades != null && localStorage.bairros != null && localStorage.tipos != null && localStorage.ceps != null
        && localStorage.areasC != null && localStorage.areasT != null && localStorage.numeros != null && localStorage.ruas != null) {
        var cidades = localStorage.cidades.split(",");
        var bairros = localStorage.bairros.split(",");
        var ceps = localStorage.ceps.split(",");
        var tipos = localStorage.tipos.split(",");
        var ruas = localStorage.ruas.split(",");
        var numeros = localStorage.numeros.split(",");
        var areasC = localStorage.areasC.split(",");
        var areasT = localStorage.areasT.split(",");

        for (var i = 0; i < cidades.length; i++) {
            cidade.push(cidades[i]);
            bairro.push(bairros[i]);
            logradouro.push((ruas[i] + ", " + numeros[i]));
            areaC.push(areasC[i]);
            areaT.push(areasT[i]);
            tipo.push(tipos[i]);
            CEP.push(ceps[i]);
            imagens.push("Casa001");
        }
    }
}

//Função para conferir as cidades diponíveis e adiciona-las em um data list para ajudar nas buscas
function conferirCidades() {
    var datalist = document.getElementById("cidadesDisponiveis");
    datalist.innerText = ""; //Zera tudo que estiver dentro do datalist

    //Cria um vetor com as cidades disponíveis
    var cidadesDisponiveis = [];
    for (var i = 0; i < cidade.length; i++) {
        if (cidadesDisponiveis.indexOf(cidade[i]) == -1) { //cidadesDisponiveis.indexOf(cidade[i]) retorna -1 quando não há o elemento no vetor
            cidadesDisponiveis.push(cidade[i])
        }
    }
    cidadesDisponiveis = cidadesDisponiveis.sort(); //Organiza as cidades em ordem alfabética


    //Faz a criação e adição dos elementos HTML
    for (let i = 0; i < cidadesDisponiveis.length; i++) {
        datalist = document.getElementById("cidadesDisponiveis");
        var option = document.createElement("option");
        option.value = cidadesDisponiveis[i];
        datalist.appendChild(option);
    }
}

function carregarImoveis(filtroArea, tipoImovel, filtroCidade, filtroBairro) {

    var imoveis = document.querySelector(".imoveis");
    imoveis.innerText = ""; //Limpa toda section .imoveis

    var contadorImoveis = 0; //Variável para contar quantos imóveis foram encontrados com os filtros escolhidos

    for (let i = 0; i < tipo.length; i++) {

        if ((areaC[i] >= filtroArea[0] && ((areaC[i] <= filtroArea[1]) || filtroArea[1] == 0)) // A área tem que ser maior que o mínimo e menor que o máximo, ou só maior que o mínimo
            && (tipoImovel.indexOf(tipo[i]) > -1 || tipoImovel.length == 0) // tipoImovel.indexOf(tipo[i]) retorna true se o tipo[i] está contido no vetor tipoImovel ou false quando não está
            && (filtroCidade.toLowerCase() == cidade[i].toLocaleLowerCase() || filtroCidade == "Todas")
            && (filtroBairro == bairro[i] || filtroBairro == "Todos")) { //Quando atende todos os filtros os elementos HTML são criados e adicionados na página

            contadorImoveis += 1;

            var imovel = document.createElement("div");
            imovel.classList.add("imovel");

            var informacoesImovel = document.createElement("div");
            informacoesImovel.classList.add("informacoes-imovel");

            var imgImovel = document.createElement("img");
            var tituloImovel = document.createElement("p");
            var areaCImovel = document.createElement("p");
            var areaTImovel = document.createElement("p");
            var enderecoImovel = document.createElement("p");

            imgImovel.src = "../imagens-imoveis/" + imagens[i] + ".jpg"; //Atribui um caminho personalizado para o src da img Ex.: ../imagens-imoveis/Apartamento001.jpg
            imgImovel.classList.add("img-imovel");

            tituloImovel.textContent = tipo[i] + " em " + cidade[i];
            tituloImovel.classList.add("tipo-imovel");

            areaCImovel.textContent = "Área contruida: " + areaC[i] + "m²";
            areaCImovel.classList.add("area-construida-imovel")
            areaCImovel.classList.add("tipo-detalhes");

            areaTImovel.textContent = "Área total: " + areaT[i] + "m²";
            areaTImovel.classList.add("area-total-imovel");
            areaTImovel.classList.add("tipo-detalhes");

            enderecoImovel.textContent = logradouro[i] + ", " + bairro[i] + ", CEP: " + CEP[i];
            enderecoImovel.classList.add("endereco-imovel");
            enderecoImovel.classList.add("tipo-detalhes");

            informacoesImovel.appendChild(tituloImovel)
            informacoesImovel.appendChild(areaCImovel)
            informacoesImovel.appendChild(areaTImovel)
            informacoesImovel.appendChild(enderecoImovel)

            imovel.appendChild(imgImovel)
            imovel.appendChild(informacoesImovel)

            imoveis.appendChild(imovel)
        }
    }

    var qtdImoveis = document.querySelector(".qtdImoveis");
    qtdImoveis.innerText = "";
    var textoInformacoes = document.createElement("p");
    textoInformacoes.textContent = contadorImoveis + " imóveis encontrados com essas especificações!";
    textoInformacoes.classList.add("texto-informacoes");
    qtdImoveis.appendChild(textoInformacoes);

}

//Função para adicionar os filtros necessários para chamar a função carregarImoveis()
function filtrarImoveis() {

    var filtroArea = [];
    var tipoImovel = [];

    var areaMinima = Number(inAreaMinima.value);
    var AreaMaxima = Number(inAreaMaxima.value);

    filtroArea.push(areaMinima > 0 ? areaMinima : 0); //Atribui 0 para área mínima se não for digitado nada ou se for digitado um número negativo
    filtroArea.push(AreaMaxima > areaMinima ? AreaMaxima : 0); //Atribui 0 para área máxima se não for digitado nada ou se for digitado um número menor que a área mínima

    inAreaMinima.value = filtroArea[0];
    inAreaMaxima.value = filtroArea[1] != 0 ? filtroArea[1] : "";

    if (cbApartamento.checked) {
        tipoImovel.push("Apartamento");
    }
    if (cbCasa.checked) {
        tipoImovel.push("Casa");
    }
    if (cbSitio.checked) {
        tipoImovel.push("Sítio");
    }
    if (cbLoja.checked) {
        tipoImovel.push("Loja");
    }
    if (cbDuplex.checked) {
        tipoImovel.push("Duplex");
    }
    if (cbTerreno.checked) {
        tipoImovel.push("Terreno");
    }

    var filtroCidade = inCidade.value == "" ? "Todas" : inCidade.value;
    var filtroBairro = inBairro.value == "" ? "Todos" : inBairro.value;


    carregarImoveis(filtroArea, tipoImovel, filtroCidade, filtroBairro);
}

//Função para conferir os bairros de acordo com a cidade escolhida
function conferirBairros() {

    var cidadeSelecionada = inCidade.value;

    var select = document.getElementById("inBairro");
    select.innerText = ""; //Remove todas as options antes de adicionar as novas

    var msgErro = document.querySelector(".erro-bairro");

    //Cria a option Todos
    var option = document.createElement("option");
    option.value = "Todos";
    option.textContent = "Todos";
    select.appendChild(option);

    var bairrosDisponiveis = [];

    if (cidadeSelecionada == "") {
        msgErro.style.display = "block";
    } else {
        msgErro.style.display = "none";
        for (var i = 0; i < bairro.length; i++) {
            if (cidadeSelecionada == cidade[i] || cidadeSelecionada == "") { //Confere se o bairro corresponde a cidade
                if (bairrosDisponiveis.indexOf(bairro[i]) == -1) { //confere se esse bairro já foi adicionado
                    bairrosDisponiveis.push(bairro[i]); //Adiciona esse bairro no vetor

                    //Cria a option e insere no HTML
                    var option = document.createElement("option");
                    option.value = bairro[i];
                    option.textContent = bairro[i][0].toUpperCase() + bairro[i].substring(1).toLowerCase(); //Mostra o texto com a primeira letra maiúscula
                    select.appendChild(option);
                }

            }
        }
    }

}

function limparFiltros() {
    inCidade.value = "";
    inBairro.value = "Todos";

    cbApartamento.checked = false;
    cbCasa.checked = false;
    cbSitio.checked = false;
    cbLoja.checked = false;
    cbDuplex.checked = false;
    cbTerreno.checked = false;

    inAreaMinima.value = 0;
    inAreaMaxima.value = "";

    carregarImoveis([0, 0], [], 'Todas', 'Todos'); //Chama a função com os valores padrões
}



// Listeners
btFiltrar.addEventListener("click", filtrarImoveis);
btLimpar.addEventListener("click", limparFiltros);
inBairro.addEventListener("focus", conferirBairros);

// Chama essas funções ao carregar a página
carregarNovosImoveis();
conferirCidades();
carregarImoveis([0, 0], [], 'Todas', 'Todos');

