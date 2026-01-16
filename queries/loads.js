// This file contains SQL statements used for loads

export const loads = {
	// This query looks up a specific token in an "assignments" table. For every assignment it finds with that token, 
    // it grabs the matching load ID. It then uses that ID to fetch all the details for that specific load from the main "loads" table.
	getLoads: `with load_and_stop_data as (
  SELECT loads.*,
    (
      SELECT jsonb_agg(stops ORDER BY array_position(loads.stop_ids, stops.stop_id))
      FROM stops
      WHERE stops.stop_id = ANY(loads.stop_ids)
    ) as stops
  FROM loads
),
loads_per_user as (
  select load_and_stop_data.* 
  from load_assignments 
  left join load_and_stop_data 
    on load_assignments.load_id= load_and_stop_data.id
  where token = $1
)
select * from loads_per_user;`,

UpdateLoadAssignmentToken: `UPDATE load_assignments SET token = $1 WHERE username = $2`,
  };
