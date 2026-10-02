describe('LATIHAN API', () => {
   beforeEach(() => {

   })
   
    it('Ambil data user dan lakukan validasi berdasarkan nilai', () => {
        cy.request('https://reqres.in/api/users/2')
        .then((response) => {

            expect(response.status).to.eq(200)

            const user = response.body.data
    

        // Kondisi 1. Jika first_name adalah janet

        if (user.first_name === 'Janet') {
            expect(user.email).to.eq('janet.weaver@reqres.in')
            cy.log('Nama Janet ditemukan dan email sesuai')
            
            }

        // Kondisi 2. Jika ID adalah 2

        if (user.id === 2) {
            expect(user.avatar).to.include('2-image.jpg')
            cy.log('ID 2 ditemukan, avatar valid')

        } else {

            // Kondisi 3. Jika ID Bukan 2

            cy.log('unkown user ID: ${user.id}')
            console.warn('unkown user ID: ${user.id}')
        }
        
     })

    })

})

