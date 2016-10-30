var making_data = "";	
var mark_table = new Array(data_list.length); 

for (out_n = 0 ; out_n < 45 ; out_n++)
{
	var is_founded = false;	
	
	while (is_founded != true) {		
		response_Link = Math.random() * data_list.length;		
		
		//searching
		for (random_index = 1 ; random_index <= data_list.length ; random_index++)	
		{			
			if (random_index - 1 < response_Link && response_Link < random_index) 
			{				
				if (mark_table[random_index - 1] != true) 
				{
					mark_table[random_index - 1] = true
					is_founded = true
				}
				break;				
			}				
		}
	}
}

//making_data += count + "." //for debug 
count = 1
for (i = 0 ; i < mark_table.length ; i++) 
{
	if (mark_table[i] == true)
	{
		var title = data_list[i][1];
		if (title[title.length -1 ] != '*') 
		{
			count++;
			making_data += "<a href ='" + data_list[i][0] + "'>" + title + "</a></br>";				
		}
	}	
}	

var output_container = document.getElementById('e_random');	
output_container.innerHTML = making_data;