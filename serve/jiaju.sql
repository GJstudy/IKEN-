set names utf8;
drop database if exists jiaju;
create database jiaju charset=utf8;
use jiaju;

create table user(
  -- uid int auto_increment,
  uphone varchar(16) primary key,
  uname varchar(16),
  upwd varchar(16)
);
insert into user values ('19135134202','张三','123456');

create table recommend(
  rid int primary key auto_increment,
  img varchar(64),
  title varchar(32),
  introduce  varchar(64),
  style varchar(128)
);
insert into recommend values(null,'img/tuijian1.jpg','探索当季新品','用我们的最新产品，给生活带来夏日活力！','background:#f5cf41;');
insert into recommend values(null,'img/tuijian2.jpg','限时特惠','数量有限，售完即止。','background:#5e5e5e;color:white;');
insert into recommend values(null,'img/tuijian3.jpg','会员特惠','加入俱乐部即可享受会员福利','background:#69948f;');
insert into recommend values(null,'img/tuijian4.jpg','分期付款即享品质生活','即刻购买，日后支付。线上线下同享','background:#8fa2b3;');
insert into recommend values(null,'img/tuijian5.gif','来IKEN,享清凉一夏','欢迎光临IKEN餐厅/小餐馆，畅享夏季美食','background:#eec18d;');
insert into recommend values(null,'img/tuijian6.jpg','我们的更低价格','价格是我们不变的追求，而你也将获益更多','background:#dfd8cc;');

create table home_example(
  rid int primary key auto_increment,
  img varchar(64),
  title varchar(32)
);
insert into home_example values(null,'img/shili1.jpg','适合家庭开放式公寓布置创意');
insert into home_example values(null,'img/shili2.jpg','田园美居：享受乡村生活的一家人');
insert into home_example values(null,'img/shili3.jpg','一间有灵魂的一居室：麻雀虽小，五脏俱全');
insert into home_example values(null,'img/shili4.jpg','平行空间：经济实惠的小公寓，满足共享居住需求');
insert into home_example values(null,'img/shili5.jpg','经济实惠的丰盛大餐：爱好美食的多代同堂大家庭');

create table proitem(
  pid int primary key auto_increment,
  series varchar(64),
  img varchar(64),
  title varchar(64),
  detail1 varchar(128),
  detail2 varchar(128),
  detail3 varchar(128),
  detail4 varchar(128),
  detail5 varchar(128),
  style varchar(64),
  cid int,
  recid int,
  foreign key(recid) references recommend(rid)
);

INSERT INTO proitem VALUES (1, '全新书桌系列', 'img/new/BER.jpg', 'BERGLÄRKA 贝利徕加 儿童书桌', '适用于3岁及以上年龄。', '可在52-72cm的范围内灵活调整高度，桌面可以倾斜10、20或30度，不管在阅读、书写或绘画时，孩子都能保持放松的姿势。', '桌边的配有挂钩可以挂放包袋或耳机之类的随身物品，方便随时拿取。', '可调节支脚，即使在不平坦的地板上也能保持稳固。', '储物区和搁板方便孩子在做手工艺品或家庭作业时将重要的用具放在手边。', 'background-color: #5db2ae;', 10, 1);
INSERT INTO proitem VALUES (2, 'VÅRDANDE 沃当德 系列', 'img/new/wdd.jpg', 'VÅRDANDE 沃当德', '特点在于简单、天然、独特', '设计师Akanksha Deo和Sarah Fager与我们的社会企业供应商密切合作，于微小的细节之中彰显他们出色的手工艺技能，赋予了这个系列独特的风格。', 'VÅRDANDE 沃当德 系列包括棉和黄麻制作的配件，触感柔软舒适，易于整理和携带，适合在温暖的夏季使用。', 'VÅRDANDE 沃当德 系列陪伴你放松身心。手工刺绣织物和全棉制作的柔软毛巾帮助你重焕活力。', '触感柔软的全棉织物帮助你放松下来。', 'background-color: #d9ced4;', 20, 1);
INSERT INTO proitem VALUES (3, '全新家居香氛', 'img/new/xf.jpg', 'Ilse Crawford', '这个香味烛系列的玻璃和陶瓷盛具由Ilse Crawford精心设计。', '每一款香味的罐子各不相同，而且这些设计醒目的蜡烛罐在蜡烛燃尽后可重复使用。', '我们与大自然之间有着一些无法磨灭的联系。我们希望能透过气味，让人们在家中重新回味对大自然的本能记忆。', '这些香味烛的灵感源于大自然，清新、出众的香调可在家中营造平和宜人的氛围。所用的蜡由多达70%的天然植物性可再生材料制成，且不含棕榈油。', '', 'background-color: #ba9489;', 30, 1);
INSERT INTO proitem VALUES (4, '餐具厨具限时特惠', 'img/new/cj.jpg', '餐具厨具', '品质“橱”藏时尚，工程“柜”于自然。', '踏入餐厅,灯光是蓝色,餐具是蓝的,桌椅是蓝的,让人恍惚之间有到了爱琴海边的错觉,浪漫唯美的装修风格、充满欧 洲风味的精致美食,处处洋溢着地中海风情,是情侣约会的不二之选。', '好厨卫,让你享受生活乐趣。', '品质生活，美味选择。', NULL, 'background-color:#e7eaed;', 40, 2);
INSERT INTO proitem VALUES (5, '灯具限时特惠', 'img/new/dj.jpg', '灯具', '发光时代，好灯照亮好生活', '在发光的时代找到属于自己的光', '科技，创造光的新新时代', '华灯需彩饰，光影恰和谐', NULL, 'background-color:#eab8a1;', 50, 2);
INSERT INTO proitem VALUES (6, '儿童用品限时特惠', 'img/new/et.jpg', '儿童用品', '每一位妈妈最担心的就是孩子', '爱,一直都在;爱护,从未更改——世纪宝贝,健康快乐,成就未来。', '你的童年,别人无可替代——世纪宝贝儿童用品', '爱心呵护,健康成长——世纪宝贝,成就跨世纪人才!', '童年快乐的记忆伴爱成长,幸福童年外形漂漂亮亮,内芯健健康康', 'background-color:#dbe778;', 60, 2);

create table classify(
  cid int primary key,
  cname varchar(32)
);
INSERT INTO classify VALUES (10, '桌椅');
INSERT INTO classify VALUES (20, '纺织');
INSERT INTO classify VALUES (30, '香氛');
INSERT INTO classify VALUES (40, '餐具/厨具');
INSERT INTO classify VALUES (50, '灯具');
INSERT INTO classify VALUES (60, '儿童');

create table products(
  pid int primary key auto_increment,
  img varchar(64),
  title varchar(32),
  brief varchar(32),
  price varchar(16),
  classifyid int,
  foreign key(classifyid) references classify(cid)
);

INSERT INTO products VALUES (1, 'img/new/sz1.jpg', 'BERGLÄRKA 贝利徕加', '儿童书桌，100×70厘米', '999.00', 10);
INSERT INTO products VALUES (2, 'img/new/sz2.jpg', 'BERGLÄRKA 贝利徕加', '儿童书桌，100×70厘米', '999.00', 10);
INSERT INTO products VALUES (3, 'img/new/sz3.jpg', 'PIPLARKA 皮莱尔', '书桌，80×63厘米', '499.00', 10);
INSERT INTO products VALUES (4, 'img/new/sz4.jpg', 'BERGLÄRKA 贝利徕加', '儿童书桌，120×70厘米', '1299.00', 10);
INSERT INTO products VALUES (5, 'img/new/fz1.jpg', 'VÅRDANDE 沃当德', '浴袍', '199.00', 20);
INSERT INTO products VALUES (6, 'img/new/fz2.jpg', 'VÅRDANDE 沃当德', '休闲毯，130x170 厘米', '299.00', 20);
INSERT INTO products VALUES (7, 'img/new/fz3.jpg', 'VÅRDANDE 沃当德', '储物篮，40 厘米', '249.00', 20);
INSERT INTO products VALUES (8, 'img/new/fz4.jpg', 'VÅRDANDE 沃当德', '香味混合植物篮子，14 厘米', '39.99', 20);
INSERT INTO products VALUES (9, 'img/new/fz5.jpg', 'VÅRDANDE 沃当德', '悬挂饰物', '69.99', 20);
INSERT INTO products VALUES (10, 'img/new/xf1.jpg', 'HEDERSAM 赫德尚', '香味烛和玻璃杯，50 小时', '49.99', 30);
INSERT INTO products VALUES (11, 'img/new/xf2.jpg', 'ADLAD 阿拉德', '香味烛和玻璃杯，50 小时', '49.99', 30);
INSERT INTO products VALUES (12, 'img/new/xf3.jpg', 'STÖRTSKÖN 斯特焕', '香味烛和玻璃杯，50 小时', '49.99', 30);
INSERT INTO products VALUES (13, 'img/new/xf4.jpg', 'JÄMLIK 洋黎', '香味烛和玻璃杯，50 小时', '49.99', 30);
INSERT INTO products VALUES (14, 'img/new/xf5.jpg', 'LUGNARE 卢纳勒', '香味烛和玻璃杯，50 小时', '49.99', 30);
INSERT INTO products VALUES (15, 'img/new/cj1.jpg', 'KALLNA 卡尔娜', '杯子，31 厘升', '29.99', 40);
INSERT INTO products VALUES (16, 'img/new/cj2.jpg', 'GRILLTIDER 格里绨徳', '烧烤架清洁刷', '19.99', 40);
INSERT INTO products VALUES (17, 'img/new/cj3.jpg', 'GRILLTIDER 格里绨徳', '围裙，69x92 厘米', '45.99', 40);
INSERT INTO products VALUES (18, 'img/new/cj4.jpg', 'ANLEDNING 昂莱宁', '上菜架，29 厘米', '119.00', 40);
INSERT INTO products VALUES (19, 'img/new/dj1.jpg', 'SKURUP 斯库鲁', '吊灯，38 厘米', '84.99', 50);
INSERT INTO products VALUES (20, 'img/new/dj2.jpg', 'BOGSERA 伯格塞拉', 'LED吸顶灯，2700 开尔文', '249.00', 50);
INSERT INTO products VALUES (21, 'img/new/dj3.jpg', 'SOLVINDEN 索文顿', 'LED灯串12头', '67.99', 50);
INSERT INTO products VALUES (22, 'img/new/dj4.jpg', 'IRSTA 俄斯达', 'LED台面照明条 乳白色 40 厘米', '249.99', 50);

create table collect(
  coid int primary key auto_increment,
  img varchar(64),
  title varchar(32),
  brief varchar(32),
  price varchar(16),
  pid int,
  foreign key(pid) references products(pid),
  uphone varchar(16),
  foreign key(uphone) references user(uphone)
);
create table car(
  carid int primary key auto_increment,
  img varchar(64),
  title varchar(32),
  brief varchar(32),
  price varchar(16),
  total varchar(32),
  amount int default 1,
	selected boolean default false,
  pid int,
  foreign key(pid) references products(pid),
  uphone varchar(16),
  foreign key(uphone) references user(uphone)
);



