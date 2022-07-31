import { ref,onMounted } from 'vue';
import axios from 'axios';
import { useRouter,useRoute } from 'vue-router';
import { BASE_API_URL } from '@/constants';

import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export function useInsert(){
    
    const router = useRouter();
    const name = ref("");
    const alertMassage = ref("");

    const onSubmit = async () => {
      try {
        const response =  await axios.post(`${BASE_API_URL}/api/category`,{
          name:name.value
        });

        alertMassage.value = response.data.message;     

        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: alertMassage.value ,
          showConfirmButton: false,
          timer: 1500
        });

        router.replace("/category");

        

      } catch (error) {

          Swal.fire({
          position: 'center',
          icon: 'error',
          title: "ไม่สามารถบันทึกข้อมูลได้",
          showConfirmButton: false,
          timer: 1500
        });
        
      }
     

   }
    
    return { name ,onSubmit}
}

export function useEdit(){
    const router = useRouter();
    const route = useRoute();
    const name = ref("");
    const alertMassage = ref("");
    const id = ref(0);
   
   onMounted(() =>{
      id.value = route.params.id;
      //alert(id.value)
      getDataById(id.value);
    })

    const getDataById = async (id) => {
      try {
          const response =  await axios.get(`${BASE_API_URL}/api/category/${id}`);
          name.value = response.data.name

      } catch (error) {
        alertMassage.value = error.response.data.message;

        //console.log(errorMessage);
        //errorMessage.value ="เกิดข้อผิดพลาด";

        Swal.fire({
          title: alertMassage.value,
          icon: "warning",
          type: "warning",
        });
      }
    }

    const onSubmit = async () => {
      try {
        const response =  await axios.put(`${BASE_API_URL}/api/category`,{
          id: id.value,
          name: name.value
        });

        alertMassage.value = response.data.message;     

        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: alertMassage.value ,
          showConfirmButton: false,
          timer: 1500
        });

        router.replace("/category");

        

      } catch (error) {

          Swal.fire({
          position: 'center',
          icon: 'error',
          title: "ไม่สามารถบันทึกข้อมูลได้",
          showConfirmButton: false,
          timer: 1500
        });
        
      }
     

   }
    
    return { name ,onSubmit}
}

export function useDataAndDel(){
    const category = ref([]);
    const alertMassage = ref("");
    const loading = ref(false);
    // const router = useRouter();
    const page = ref(1);
    const totalPage = ref(0);


    const getData = async (page) => {
      try {
        loading.value = true;
        const response = await axios.get(`${BASE_API_URL}/api/category?page=${page}&page_size=10`);
        category.value = response.data.data;
        
        totalPage.value = response.data.last_page;
        //console.log(response.data);
      } catch (error) {
        //console.log(error);
        alertMassage.value = error.response.data.message;

        //console.log(errorMessage);
        //errorMessage.value ="เกิดข้อผิดพลาด";

        Swal.fire({
          title: alertMassage.value,
          icon: "warning",
          type: "warning",
        });
      } finally{
        loading.value = false;
      }
    };

    onMounted(() => {
      getData(page.value);
    });


    const onDeleteById = async (id) => {
      try {
        await Swal.fire({
          title: 'ยืนยันการลบข้อมูล',
          text: "คุณต้องการลบข้อมูลนี้หรือไม่?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'ยืนยันการลบ',
          cancelButtonText: 'ยกเลิก'
        }).then((result) => {
          if (result.isConfirmed) {
            
            axios.delete(`${BASE_API_URL}/api/category/${id}`);
        
            Swal.fire(
              'สำเร็จ!',
              'ข้อมูลของคุณถูกลบเรียบร้อย..',
              'success',
            );
           
          }
         
        })



      } catch (error) {
        
        alertMassage.value = error.response.data.message;

        Swal.fire({
          title: alertMassage.value,
          icon: "warning",
          type: "warning",
        });
        
      }
    }

    return { category , loading ,onDeleteById ,page, totalPage,getData};
    
}