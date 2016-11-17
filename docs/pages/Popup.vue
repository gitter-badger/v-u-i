<template>
  <div>
    <h3>Popup</h3>

    <i-card>
      <h5 slot='header'>Basic Popup</h5>
      <table style='margin: 0 auto;'>
        <tr>
          <td></td>
          <td>
            <i-popup>
              <i-btn radius='circle'>T</i-btn>
              <div slot='content'>
                hover active
              </div>
            </i-popup>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <i-popup position='left' trigger='hover-click'>
              <i-btn radius='circle'>L</i-btn>
              <div slot='content'>
                <h6>html content</h6>
                <ul>
                  <li>01</li>
                  <li>02</li>
                  <li>03</li>
                </ul>
              </div>
            </i-popup>
          </td>
          <td></td>
          <td>
            <i-popup position='right' trigger='click'>
              <i-btn radius='circle'>R</i-btn>
              <div slot='content'>
                <i-btn close-popup size='small'>Yes</i-btn>
                <i-btn close-popup size='small' type='basic'>No</i-btn>
              </div>
            </i-popup>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <i-popup position='bottom' width='50px'>
              <i-btn radius='circle'>B</i-btn>
              <div slot='content'>
                max-width
              </div>
            </i-popup>
          </td>
          <td></td>
        </tr>
      </table>
    </i-card>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>
