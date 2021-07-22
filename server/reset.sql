DROP TABLE IF EXISTS `blog_posts`;
CREATE TABLE `blog_posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255),
  `description` varchar(255),  
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO
  `blog_posts`(title, description)
VALUES
  
  (
   'My Trip to Japan',
   'Last year I decided to visit japan. Thats was awesome!'
  ),
   (
   'Brazil is really amazing!',
   'I can compare Brazil with any other country.'
  ),
  (
 (
   'A tours around Italy',
   'Gelatto, Pizza, Beaches..'
  ),
  );