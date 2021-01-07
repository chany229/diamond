<script>
	export default {
		data: function () {
			return {
				message: "Hello Vue!"
			}
		},
		methods: {
			to_path: function (to_path) {
				Turbolinks.visit(to_path);
			},
			get_path: function () {
				return window.location.href;
			},
			isCategory: function () {
				if (this.get_path().indexOf('/admin/categories') > 0 ) {
					return true;
				} else {
					return false;
				}
			},
			isEntries: function () {
				if (this.get_path().indexOf('/admin/entries') > 0 ) {
				return true;
			} else {
				return false;
			}
}
		}
	}
</script>
