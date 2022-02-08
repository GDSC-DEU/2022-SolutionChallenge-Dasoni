-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        PostgreSQL 14.1 (Debian 14.1-1.pgdg110+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 10.2.1-6) 10.2.1 20210110, 64-bit
-- 서버 OS:                        
-- HeidiSQL 버전:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 테이블 데이터 public.event:2 rows 내보내기
/*!40000 ALTER TABLE "event" DISABLE KEYS */;
INSERT INTO "event" ("event_id", "created_dt", "modified_dt", "category", "description", "ended_dt", "event_location", "region", "reservation_deadline_dt", "started_dt", "title") VALUES
	('2c023bb7-9c64-4c82-a582-4d0e1b532716', '2022-02-05 16:28:54.346267', '2022-02-05 16:28:54.346267', 'EXHIBITION', '인상주의의 후원가，수집가로 알려진 예술가 － 구스타브 카유보트의 그림과 이야기
그리고 조향사가 그림에서 영감 받아 조향한향수를 함께 감상하는 특별한 전시', '2022-04-03 00:00:00', '헤이리스 갤러리(경기도 파주시 탄현면 헤이리마을길 7)', 'GYEONGGI', '2022-04-03 00:00:00', '2021-11-06 00:00:00', '카유보트 : 향기를 만나다 展'),
	('ebafbf80-bd1c-4b82-a488-0394161b0cc4', '2022-02-05 04:41:07.172982', '2022-02-05 04:41:07.172982', 'FESTIVAL', '1년 7개월 만에 열리는 체리필터의 오프라인 단독 콘서트
체리필터와 함께 즐거운 크리스마스를 보내보자!', '2022-01-24 04:04:18.568', '롤링홀(서울 마포구 서교동 402-22)', 'SEOUL', '2022-01-24 04:04:18.568', '2022-01-24 04:04:18.568', '체리필터 연말 단독 콘서트 : Cherry Christmas');
/*!40000 ALTER TABLE "event" ENABLE KEYS */;

-- 테이블 데이터 public.event_tag:4 rows 내보내기
/*!40000 ALTER TABLE "event_tag" DISABLE KEYS */;
INSERT INTO "event_tag" ("event_event_id", "tag") VALUES
	('ebafbf80-bd1c-4b82-a488-0394161b0cc4', '방역패스'),
	('ebafbf80-bd1c-4b82-a488-0394161b0cc4', '백신패스'),
	('2c023bb7-9c64-4c82-a582-4d0e1b532716', '방역패스'),
	('2c023bb7-9c64-4c82-a582-4d0e1b532716', '백신패스');
/*!40000 ALTER TABLE "event_tag" ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
