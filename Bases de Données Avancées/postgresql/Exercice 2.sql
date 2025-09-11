CREATE OR REPLACE FUNCTION propMgrEoin() RETURNS REAL AS $$
	DECLARE
		--Nombre d'employés
		numEMP INTEGER;
		--Nombre d'employés dont la fonction est Manager
		numMan INTEGER;
		--Proportion
		pct REAL;
	BEGIN
		SELECT COUNT(*) INTO numEmp FROM EMPEoin;
		SELECT COUNT(*) INTO numMan FROM EMPEoin WHERE job == 'MANAGER';
		
		RETURN pct;
	END
$$ LANGUAGE plpgsql;

SELECT propMgrEoin();