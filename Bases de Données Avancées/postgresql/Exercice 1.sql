CREATE OR REPLACE FUNCTION nbPartsEoin() RETURNS INTEGER AS $$
	DECLARE
		n INTEGER;
	BEGIN
		--Lire le nombre de pièces
		SELECT COUNT(*) INTO n FROM partsNew;
		IF n > 6 THEN
			--Exception
			RAISE EXCEPTION 'Maximum nombre de pièces dépassé ! Il y a % sur 6 !', n;
		END IF;
		RETURN n;
	END
$$ LANGUAGE plpgsql;

SELECT nbPartsEoin();