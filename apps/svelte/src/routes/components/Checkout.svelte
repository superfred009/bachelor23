<script lang="ts">
    import type { Product } from "../types/Product";
    export let selectedProducts: Product[] = [];

    let name = '';//     const [name, setName] = useState('');
    let email = '';//   const [email, setEmail] = useState('');
    let phone = '';//   const [phone, setPhone] = useState('');
    let isSubmitting = false;//   const [isSubmitting, setIsSubmitting] = useState(false);
    let showNotification = false; //   const [showNotification, setShowNotification] = useState(false);

    const handleNameChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      name = target.value;
    };

    const handleEmailChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      email = target.value;
    };

    const handlePhoneChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      phone = target.value;
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        isSubmitting = true;

        // Simulate a delay of 2 seconds before showing the success notification
        setTimeout(() => {
            isSubmitting = false;
            showNotification = true;

            // Hide the success notification after 3 seconds
            setTimeout(() => {
                showNotification = false;
            }, 3000);
        }, 2000);
  };
</script>


<form on:submit={handleSubmit}>
    <p>Navn:</p>
    <input
      id="name"
      type="text"
      value={name}
      on:input={handleNameChange}
    />

    <p>Email:</p>
    <input
      id="email"
      type="email"
      value={email}
      on:input={handleEmailChange}
    />

    <p>Phone:</p>
    <input
      id="phone"
      type="tel"
      value={phone}
      on:input={handlePhoneChange}
    />

    <h2>Products:</h2>
    <ul>
      {#each selectedProducts as product}
        
      <li>
        {product.title}
        {#if product?.quantity && product?.quantity > 1}
          x {product.quantity}
        {/if}
         - {product.price}
      </li>
      {/each}

    </ul>

    <button type="submit" disabled={isSubmitting}>
      {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>

    {#if showNotification}
      <div>
        <p>Form submitted successfully!</p>
        <button on:click={() => window.location.reload()}>Hjem</button>
      </div>
    {/if}
  </form>