import { supabase } from "../supabase"

/**
 * @swagger
* /api/adopt/getReport:
*    post:
*      tags:
*        - adopt
*      summary: get adopt report for both user shelter
*      description: get adopt report for both user shelter
*      operationId: getReport
*      requestBody:
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ReportGetRequest'
*      responses:
*        '200':
*          description: Get Successful
*          content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/ReportGetResponse'
*        '400':
*          description: Get Failed Due to Incorrect Input
* components:
*  schemas:
*    ReportGetRequest:
*      type: object
*      properties:
*        login_id:
*          type: string
*          example: 0fb8be3d-e566-4c87-8f1b-553d6dcf2ca3
*    ReportGetResponse:
*      type: object
*      properties:
*        adopt_id:
*          type: integer
*          example: 0
*        queue_id:
*          type: integer
*          example: 0
*        cat_id:
*          type: integer
*          example: 0
*        shelter_id:
*          type: integer
*          example: 0
*        user_id:
*          type: integer
*          example: 0
*        create_date:
*          type: string
*          format: date-time
*          example: '2022-12-07 19:00:30.540431+00'
*        update_date:
*          type: string
*          format: date-time
*          example: '2022-12-07 19:00:30.540431+00'
*        adopt_date:
*          type: string
*          format: date-time
*          example: '2022-12-23'
*        adopt_status:
*          type: boolean
*          example: true
*/   

export default async function handler(req, res) {
    const { login_id } =  req.body
    const shelter_id = await getShelterID(login_id)
    //per day
    const perDay = await getdataPerDate(shelter_id)
    //per month 
    const perMonth = await getdataPerMonth(shelter_id)
    //per year
    const result = {
      perDay,
      perMonth
    }
    res.status(200).json(result)
}

//get data per date 
async function getdataPerDate( shelter_id, result ) {
  const date = new Date()
  const currentDate = getDate(date)

  const { data, count } = await supabase.from('adopt').select('*', { count: 'exact' }).eq('shelter_id', shelter_id).gte('adopt_date', currentDate)
  result = {
    data,
    count
  }
  
  console.log("date : ", currentDate)
  console.log("count : ", count)
  console.log("data : ", data)
  return result
}

//get data per date 
async function getdataPerMonth( shelter_id, result ) {
  const date = new Date()
  const currentDate = getDate(date)
  const currentMonth = getMonth(currentDate)
  
  //query data
  const { data, count} = await supabase.from('adopt').select('*', { count: 'exact'}).eq('shelter_id', shelter_id).gte( 'adopt_date', currentMonth)
  result = {
    data,
    count
  }

  const month = currentMonth.split('-')[1]
  console.log("month : ", month)
  console.log("count : ", count)
  console.log("data : ", data)
  return result
}

//get adoptDate


//check shelter_id exist
async function getShelterID(login_id, shelter_id) {
    //query
    const { data } = await supabase.from('shelter_profile').select().eq('login_id', login_id)
    if ( data == "" || data == null) {
      //shelter_id does not exist
      shelter_id = null
    } else {
      const query = data?.map(({ shelter_id }) => ({ shelter_id }))
      const json = JSON.stringify(query)
      shelter_id = json.split(':')[1].split('}]')[0]
    }
    console.log("shelter id ", shelter_id)
    return shelter_id
  }
  
function getDate(date){
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear()

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-')
}

function getMonth(date){
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      year = d.getFullYear()

  if (month.length < 2) 
      month = '0' + month;

  return [year, month, 1].join('-')
}