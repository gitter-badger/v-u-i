<template>
  <div>
    <h3>Card</h3>

    <i-card>
      <h5 slot='header'>Basic Card</h5>
      <i-card>
        <div slot='header'><b>card header</b></div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque aut nobis beatae, ullam mollitia aspernatur dolores?
            Officia a tempora, soluta.
          </p>
        </div>
        <div slot='footer'>this is footer</div>
      </i-card>
    </i-card>

    <i-card>
      <h5 slot='header'>No Spacing Card</h5>
      <i-card no-header-spacing no-content-spacing no-footer-spacing>
        <div slot='header'><b>card header</b></div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque aut nobis beatae, ullam mollitia aspernatur dolores?
            Officia a tempora, soluta.
          </p>
        </div>
        <div slot='footer'>this is footer</div>
      </i-card>
    </i-card>

    <i-card>
      <h5 slot='header'>Card &amp; From</h5>
      <i-card>
        <div slot='header'><b>login</b></div>
        <div>
          <i-form>
            <i-form-item label='User Name'>
              <i-input name='iun'></i-input>
            </i-form-item>
            <i-form-item label='User Password'>
              <i-input password name='iup'></i-input>
            </i-form-item>
            <i-form-item>
              <i-btn html-type='submit'>Submit</i-btn>
            </i-form-item>
          </i-form>
        </div>
      </i-card>
    </i-card>

    <i-card>
      <h5 slot='header'>Card &amp; Table</h5>
      <i-card no-content-spacing>
        <div slot='header'><b>user list</b></div>
        <div>
          <i-table
            row-key='id'
            :data='[
              {id:0, name:"aaa", age:20},
              {id:1, name:"bbb", age:21},
              {id:2, name:"ccc", age:22},
              {id:3, name:"ddd", age:23},
              {id:4, name:"eee", age:24},
            ]'
            :columns='[
              { name:"id", text:"ID" },
              { name:"name", text:"Name" },
              { name:"age", text:"Age" },
            ]'
          >
          </i-table>
        </div>
      </i-card>
    </i-card>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>
