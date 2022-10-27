INSERT INTO ANSWER (ANSWER_ID, BODY, CREATED_AT) VALUES
('1', '본문입니다1', '2022-10-27T11:57:00.196025'),
('2', '본문입니다2', '2022-10-28T11:57:00.196025'),
('3', '본문입니다3', '2022-10-29T11:57:00.196025'),
('4', '본문입니다4', '2022-10-10T11:57:00.196025'),
('5', '본문입니다5', '2022-10-12T11:57:00.196025'),
('6', '본문입니다6', '2022-10-13T11:57:00.196025'),
('7', '본문입니다7', '2022-10-14T11:57:00.196025'),
('8', '본문입니다8', '2022-10-15T11:57:00.196025'),
('9', '본문입니다9', '2022-10-16T11:57:00.196025'),
('10', '본문입니다10', '2022-10-17T11:57:00.196025');


INSERT INTO POST (POST_ID, TITLE, BODY) VALUES
('1', '제목1',  '본문입니다1'),
('2', '제목2',  '본문입니다2'),
('3', '제목3',  '본문입니다3'),
('4', '제목4',  '본문입니다4'),
('5', '제목5',  '본문입니다5'),
('6', '제목6',  '본문입니다6'),
('7', '제목7',  '본문입니다7'),
('8', '제목8',  '본문입니다8'),
('9', '제목9',  '본문입니다9'),
('10', 'How to disable Button inside collapse datatable', 'My goal is to disable buttons in column index 5 when i click then button "Disable datatable button" base on image example. when I try to collapse my code works disable the button, but the problem is when column index 5 does not show it doesnt work anymore');

INSERT INTO USER (USER_ID, USER_NAME, EMAIL, USER_ROLE, USER_STATUS) VALUES
('1', 'kjm', 'kjm@abc.com','ADMIN', 'ACTIVE'),
('2', 'abc', 'abc@abc.com','NORMAL', 'DEACTIVE'),
('3', 'hyo', 'hyo@abc.com','NORMAL', 'ACTIVE'),
('4', 'hjo', 'hjo@abc.com','NORMAL', 'ACTIVE'),
('5', 'jay', 'jay@abc.com','NORMAL', 'ACTIVE'),
('6', 'kjm', 'kjm@abc.com','ADMIN', 'ACTIVE'),
('7', 'abc', 'abc@abc.com','NORMAL', 'DEACTIVE'),
('8', 'hyo', 'hyo@abc.com','NORMAL', 'ACTIVE'),
('9', 'hjo', 'hjo@abc.com','NORMAL', 'ACTIVE'),
('10', 'jay', 'jay@abc.com','NORMAL', 'ACTIVE');

INSERT INTO TAG (TAG_ID, TAG_NAME) VALUES
('1', 'java'),
('2', 'python'),
('3', 'html'),
('4', 'css'),
('5', 'js'),
('6', 'spring'),
('7', 'react'),
('8', 'graph'),
('9', 'aws'),
('10', 'rust');
